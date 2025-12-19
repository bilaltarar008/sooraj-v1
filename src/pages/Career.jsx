import React from "react";
import { useTranslation } from "react-i18next";
import "./../styles/CareerPage.css";

export default function CareerPage() {
  const { t } = useTranslation();

  const tags = [
    t("career.tags.all"),
    t("career.tags.agriculture"),
    t("career.tags.field"),
    t("career.tags.research"),
    t("career.tags.crop"),
    t("career.tags.production"),
    t("career.tags.management"),
  ];

  const jobs = [
    {
      title: t("career.jobs.1.title"),
      desc: t("career.jobs.1.desc"),
      type1: t("career.jobs.1.type1"),
      type2: t("career.jobs.1.type2"),
    },
    {
      title: t("career.jobs.2.title"),
      desc: t("career.jobs.2.desc"),
      type1: t("career.jobs.2.type1"),
      type2: t("career.jobs.2.type2"),
    },
    {
      title: t("career.jobs.3.title"),
      desc: t("career.jobs.3.desc"),
      type1: t("career.jobs.3.type1"),
      type2: t("career.jobs.3.type2"),
    },
  ];

  return (
    <>
      <style>{`/* YOUR ORIGINAL STYLES — UNCHANGED */`}</style>

      <div className="career-page">
        <div className="hero">
          <h1 className="hero-title">{t("career.heroTitle")}</h1>
          <p className="hero-text">{t("career.heroText")}</p>

          <div className="tags">
            {tags.map((tag) => (
              <button key={tag} className="tag">{tag}</button>
            ))}
          </div>
        </div>

        <section className="jobs">
          {jobs.map((job) => (
            <div className="job-card" key={job.title}>
              <div className="job-header">
                <h2 className="job-title">{job.title}</h2>
                <a
                  href="https://www.linkedin.com/company/sooraj-crop-sciences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply"
                >
                  {t("career.apply")} ↗
                </a>
              </div>
              <p className="job-desc">{job.desc}</p>
              <div className="job-types">
                <span className="job-type">{job.type1}</span>
                <span className="job-type">{job.type2}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
