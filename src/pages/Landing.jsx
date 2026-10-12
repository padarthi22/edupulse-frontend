import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="space-y-12">
      <section className="fade-up">
        <p className="label mb-3">EduPulse · early academic support</p>
        <h1 className="display-mark text-[clamp(2.4rem,5vw,4rem)] tracking-tightest text-ink">
          See the signal,<br/>
          <em className="not-italic" style={{ fontStyle: 'italic' }}>before</em> the grade slips.
        </h1>
        <p className="max-w-prose mt-5 muted text-base leading-relaxed">
          Decision-support for teachers and students. A small, explainable
          scoring baseline plus Gemini-powered explanations and personalised
          study plans — act earlier, never auto-penalise a student.
        </p>
        <div className="row mt-7">
          <Link to="/signup" className="btn btn-primary">Create an account</Link>
          <Link to="/login" className="btn btn-ghost">Sign in</Link>
        </div>
      </section>

      <section className="grid-cards">
        <div className="card hover-rise">
          <p className="label">For students</p>
          <p className="text-sm mt-2 leading-relaxed">Current risk band, predicted grade, and a study-buddy chat grounded on your own data.</p>
        </div>
        <div className="card hover-rise">
          <p className="label">For teachers</p>
          <p className="text-sm mt-2 leading-relaxed">Per-class trends, top contributing factors, what-if simulator, weekly digest.</p>
        </div>
        <div className="card hover-rise">
          <p className="label">For admins</p>
          <p className="text-sm mt-2 leading-relaxed">Cohort fairness, model monitoring, AI-service usage and budget.</p>
        </div>
      </section>

      <section className="card-paper">
        <p className="label">How risk is decided</p>
        <ol className="list-decimal pl-5 text-sm space-y-2 mt-3 marker:muted">
          <li>Aggregate per-student signals into a 12-feature vector — attendance, marks, engagement, wellbeing, assignments.</li>
          <li>Score the vector with a small, transparent weighted rule.</li>
          <li>Gemini explains the band and drafts an action plan, grounded on the same signals.</li>
          <li>Mentors log interventions; the system measures if risk improves.</li>
        </ol>
      </section>
    </div>
  );
}
