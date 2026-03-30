import { useState } from "react";
import "./EventRequestForm.css";
import { supabase } from './supabaseClient';

const EVENT_TYPES = [
  { value: "vendor",      label: "🛍️ Vendor / Sponsor Booth" },
  { value: "seminar",     label: "🎤 Seminar / Workshop" },
  { value: "athlete",     label: "💪 Athlete Guest Appearance" },
  { value: "photo",       label: "📸 Photography / Media" },
  { value: "nutrition",   label: "🥗 Nutrition / Supplement Demo" },
  { value: "coaching",    label: "🎯 Coaching Clinic" },
  { value: "other",       label: "⚡ Other" },
];
const AUDIENCE_SIZES = ["< 50", "50–200", "200–500", "500+"];
const DAYS = ["Saturday Aug 2", "Sunday Aug 3", "Both Days", "Flexible"];
const EQUIPMENT = ["PA System / Mic", "Projector / Screen", "Vendor Table & Chairs", "Power Outlet", "Live Stream Setup", "Banner Stand"];

const EMPTY = {
  orgName: "", contactName: "", email: "", phone: "",
  eventType: "", eventTitle: "", description: "",
  audienceSize: "", day: "", duration: "",
  equipmentNeeds: [], website: "", prevExperience: "", agree: false,
};

export default function EventRequestForm() {
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [step, setStep]         = useState(1);
  const [focused, setFocused]   = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError]   = useState(null);

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: null }));
  };
  const toggleEquipment = (item) => {
    setForm(f => ({
      ...f,
      equipmentNeeds: f.equipmentNeeds.includes(item)
        ? f.equipmentNeeds.filter(e => e !== item)
        : [...f.equipmentNeeds, item],
    }));
  };
  const validate = () => {
    const e = {};
    if (!form.orgName.trim())      e.orgName      = "Required";
    if (!form.contactName.trim())  e.contactName  = "Required";
    if (!form.email.includes("@")) e.email        = "Valid email required";
    if (!form.eventType)           e.eventType    = "Select a type";
    if (!form.eventTitle.trim())   e.eventTitle   = "Required";
    if (!form.description.trim())  e.description  = "Required";
    if (!form.audienceSize)        e.audienceSize = "Required";
    if (!form.day)                 e.day          = "Required";
    if (!form.duration.trim())     e.duration     = "Required";
    if (!form.agree)               e.agree        = "You must agree to continue";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setIsSubmitting(true); setSubmitError(null);

    const { data, error } = await supabase
      .from('event_requests')
      .insert([{
        org_name:        form.orgName,
        contact_name:    form.contactName,
        email:           form.email,
        phone:           form.phone,
        website:         form.website,
        event_type:      form.eventType,
        event_title:     form.eventTitle,
        description:     form.description,
        preferred_day:   form.day,
        duration:        form.duration,
        audience_size:   form.audienceSize,
        equipment_needs: form.equipmentNeeds,
        prev_experience: form.prevExperience,
      }])
      .select();

    setIsSubmitting(false);
    if (error) { setSubmitError(`Error: ${error.message}`); return; }
    setStep(2);
  };

  const ic = (k) => `erf__input  ${errors[k] ? "erf__input--err"  : ""}`;
  const sc = (k) => `erf__select ${errors[k] ? "erf__select--err" : ""}`;
  const tc = (k) => `erf__textarea ${errors[k] ? "erf__textarea--err" : ""}`;

  if (step === 2) return (
    <section className="erf erf--success">
      <div className="erf__success-glow" />
      <div className="erf__success-inner">
        <div className="erf__success-icon">🏆</div>
        <div className="erf__success-eyebrow">Application Received</div>
        <h2 className="erf__success-heading">YOU'RE IN THE<br /><span className="gold-shimmer">LINEUP</span></h2>
        <p className="erf__success-body">
          Thanks, <strong>{form.contactName}</strong>! We've received your application for{" "}
          <strong style={{color:'var(--gold)'}}>"{form.eventTitle}"</strong>.
          Our team will review and contact you at <strong>{form.email}</strong> within 5–7 business days.
        </p>
        <div className="erf__success-card">
          {[["Type", EVENT_TYPES.find(t=>t.value===form.eventType)?.label],
            ["Day", form.day], ["Audience", form.audienceSize], ["Duration", form.duration]
          ].map(([k,v]) => (
            <div key={k} className="erf__success-row">
              <span className="erf__success-key">{k}</span>
              <span className="erf__success-val">{v}</span>
            </div>
          ))}
        </div>
        <button className="erf__reset-btn"
          onClick={() => { setForm(EMPTY); setStep(1); setErrors({}); setSubmitError(null); }}>
          SUBMIT ANOTHER APPLICATION
        </button>
      </div>
    </section>
  );

  return (
    <section id="apply" className="erf">
      <div className="erf__inner">
        <div className="erf__header">
          <div className="erf__eyebrow">WANT TO PARTICIPATE?</div>
          <h2 className="erf__heading">SUBMIT AN<br /><span className="gold-shimmer">APPLICATION</span></h2>
          <p className="erf__desc">Vendors, sponsors, athletes, coaches — apply to be part of the NJ Beach Body Contest experience.</p>
        </div>

        <div className="erf__card">
          <div className="erf__card-bar" />

          {/* 01 Contact */}
          <div className="erf__section">
            <div className="erf__section-title erf__section-title--gold">
              <span className="erf__section-num">01 /</span> CONTACT INFO
            </div>
            <div className="erf__grid-2">
              <div className="erf__field">
                <label className="erf__label">Organisation / Company *</label>
                <input className={ic("orgName")} value={form.orgName}
                  onChange={e=>set("orgName",e.target.value)}
                  onFocus={()=>setFocused("orgName")} onBlur={()=>setFocused(null)}
                  placeholder="Your company or team name" />
                {errors.orgName && <span className="erf__error">{errors.orgName}</span>}
              </div>
              <div className="erf__field">
                <label className="erf__label">Contact Name *</label>
                <input className={ic("contactName")} value={form.contactName}
                  onChange={e=>set("contactName",e.target.value)}
                  onFocus={()=>setFocused("contactName")} onBlur={()=>setFocused(null)}
                  placeholder="Full name" />
                {errors.contactName && <span className="erf__error">{errors.contactName}</span>}
              </div>
              <div className="erf__field">
                <label className="erf__label">Email *</label>
                <input type="email" className={ic("email")} value={form.email}
                  onChange={e=>set("email",e.target.value)}
                  onFocus={()=>setFocused("email")} onBlur={()=>setFocused(null)}
                  placeholder="you@example.com" />
                {errors.email && <span className="erf__error">{errors.email}</span>}
              </div>
              <div className="erf__field">
                <label className="erf__label">Phone (optional)</label>
                <input className={ic("phone")} value={form.phone}
                  onChange={e=>set("phone",e.target.value)}
                  placeholder="+1 (555) 000-0000" />
              </div>
              <div className="erf__field erf__col-full">
                <label className="erf__label">Website / Social (optional)</label>
                <input className={ic("website")} value={form.website}
                  onChange={e=>set("website",e.target.value)}
                  placeholder="https:// or @handle" />
              </div>
            </div>
          </div>

          <div className="erf__divider" />

          {/* 02 Event Details */}
          <div className="erf__section">
            <div className="erf__section-title erf__section-title--chrome">
              <span className="erf__section-num">02 /</span> APPLICATION DETAILS
            </div>
            <div className="erf__field">
              <label className="erf__label">Application Type *</label>
              <div className="erf__chips">
                {EVENT_TYPES.map(t => (
                  <button key={t.value}
                    className={`erf__chip ${form.eventType===t.value?"erf__chip--active":""}`}
                    onClick={()=>set("eventType",t.value)}>{t.label}</button>
                ))}
              </div>
              {errors.eventType && <span className="erf__error">{errors.eventType}</span>}
            </div>
            <div className="erf__field">
              <label className="erf__label">Title / Name *</label>
              <input className={ic("eventTitle")} value={form.eventTitle}
                onChange={e=>set("eventTitle",e.target.value)}
                onFocus={()=>setFocused("eventTitle")} onBlur={()=>setFocused(null)}
                placeholder="e.g. Elite Posing Clinic with Coach Ray" />
              {errors.eventTitle && <span className="erf__error">{errors.eventTitle}</span>}
            </div>
            <div className="erf__field">
              <label className="erf__label">Description *</label>
              <textarea className={tc("description")} value={form.description}
                onChange={e=>set("description",e.target.value)}
                placeholder="Describe what you're offering attendees..." />
              {errors.description && <span className="erf__error">{errors.description}</span>}
            </div>
            <div className="erf__grid-3">
              <div className="erf__field">
                <label className="erf__label">Preferred Day *</label>
                <select className={sc("day")} value={form.day} onChange={e=>set("day",e.target.value)}>
                  <option value="" disabled>Select…</option>
                  {DAYS.map(d=><option key={d} value={d}>{d}</option>)}
                </select>
                {errors.day && <span className="erf__error">{errors.day}</span>}
              </div>
              <div className="erf__field">
                <label className="erf__label">Duration *</label>
                <input className={ic("duration")} value={form.duration}
                  onChange={e=>set("duration",e.target.value)}
                  placeholder="e.g. 1 hr" />
                {errors.duration && <span className="erf__error">{errors.duration}</span>}
              </div>
              <div className="erf__field">
                <label className="erf__label">Expected Attendance *</label>
                <select className={sc("audienceSize")} value={form.audienceSize}
                  onChange={e=>set("audienceSize",e.target.value)}>
                  <option value="" disabled>Select…</option>
                  {AUDIENCE_SIZES.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
                {errors.audienceSize && <span className="erf__error">{errors.audienceSize}</span>}
              </div>
            </div>
          </div>

          <div className="erf__divider" />

          {/* 03 Requirements */}
          <div className="erf__section">
            <div className="erf__section-title erf__section-title--gold">
              <span className="erf__section-num">03 /</span> REQUIREMENTS
            </div>
            <div className="erf__field">
              <label className="erf__label">Equipment Needs</label>
              <div className="erf__chips">
                {EQUIPMENT.map(item => {
                  const checked = form.equipmentNeeds.includes(item);
                  return (
                    <button key={item}
                      className={`erf__equip-chip ${checked?"erf__equip-chip--checked":""}`}
                      onClick={()=>toggleEquipment(item)}>
                      <span className={`erf__check ${checked?"erf__check--on":""}`}>{checked?"✓":""}</span>
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="erf__field">
              <label className="erf__label">Previous Event Experience (optional)</label>
              <textarea className={`${tc("prevExperience")} erf__textarea--short`}
                value={form.prevExperience}
                onChange={e=>set("prevExperience",e.target.value)}
                placeholder="Previous contests, expos, or events you've participated in..." />
            </div>
          </div>

          {/* Agreement */}
          <div className="erf__field">
            <button className="erf__agree-btn" onClick={()=>set("agree",!form.agree)}>
              <div className={`erf__agree-box ${form.agree?"erf__agree-box--on":""} ${errors.agree?"erf__agree-box--err":""}`}>
                {form.agree?"✓":""}
              </div>
              <span className="erf__agree-text">
                I confirm this information is accurate and agree to the NJ Beach Body Contest{" "}
                <span className="erf__agree-link">Vendor & Participant Guidelines</span>.
                Submission does not guarantee placement.
              </span>
            </button>
            {errors.agree && <div className="erf__error">{errors.agree}</div>}
          </div>

          {submitError && (
            <div className="erf__error" style={{marginBottom:16,fontSize:14}}>⚠️ {submitError}</div>
          )}

          <div className="erf__submit-row">
            <button className="erf__submit-btn" onClick={handleSubmit} disabled={isSubmitting}
              style={{opacity: isSubmitting ? 0.7 : 1}}>
              {isSubmitting ? "⏳ SENDING..." : "⚡ SUBMIT APPLICATION"}
            </button>
            <span className="erf__required">* Required fields</span>
          </div>
        </div>
      </div>
    </section>
  );
}