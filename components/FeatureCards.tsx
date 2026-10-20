"use client";

import { useState } from "react";
import type { Feature } from "@/lib/data";

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button
        type="button"
        className={`flash${flipped ? " is-flipped" : ""}`}
        aria-pressed={flipped}
        aria-label={`${feature.title}. ${flipped ? "Show summary" : "Show how it works"}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className="flash-inner">
          <span className="flash-face flash-front" aria-hidden={flipped}>
            <span className="flash-shot">
              {feature.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={feature.image} alt={`${feature.title} screenshot`} loading="lazy" />
              ) : (
                <span className="flash-shot-empty">Screenshot</span>
              )}
            </span>
            <span className="flash-num">{String(index + 1).padStart(2, "0")}</span>
            <strong>{feature.title}</strong>
            <span className="flash-summary">{feature.summary}</span>
            <span className="flash-hint">How it works ↻</span>
          </span>
          <span className="flash-face flash-back" aria-hidden={!flipped}>
            <strong>{feature.title}</strong>
            <span className="flash-detail">{feature.detail}</span>
            <span className="flash-hint">Back ↻</span>
          </span>
        </span>
      </button>
    </li>
  );
}

export default function FeatureCards({ features }: { features: Feature[] }) {
  const roles = [...new Set(features.map((feature) => feature.role).filter((role): role is string => Boolean(role)))];
  roles.sort((left, right) => (left === "Staff" ? -1 : right === "Staff" ? 1 : left.localeCompare(right)));
  const [activeRole, setActiveRole] = useState(roles[0] ?? "");
  const [activeIndex, setActiveIndex] = useState(0);

  if (!features.some((feature) => feature.image)) {
    return (
      <div className="features">
        <p className="features-label">Key features · tap a card to see how it works</p>
        <ul className="flash-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </ul>
      </div>
    );
  }

  const roleFeatures = activeRole
    ? features.filter((feature) => feature.role === activeRole)
    : features;
  const currentIndex = Math.min(activeIndex, roleFeatures.length - 1);
  const feature = roleFeatures[currentIndex];

  function showSlide(index: number) {
    setActiveIndex((index + roleFeatures.length) % roleFeatures.length);
  }

  return (
    <div className="features feature-carousel" aria-label="Project feature screenshots">
      <div className="feature-toolbar">
        <p className="features-label">Feature walkthrough</p>
        {roles.length > 1 && (
          <div className="feature-roles" role="group" aria-label="View features by role">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                aria-pressed={activeRole === role}
                className={activeRole === role ? "is-active" : ""}
                onClick={() => {
                  setActiveRole(role);
                  setActiveIndex(0);
                }}
              >
                {role}
              </button>
            ))}
          </div>
        )}
      </div>

      {feature && (
        <div className="feature-slide" aria-live="polite">
          <div className="feature-copy">
            <span className="feature-number">
              {String(currentIndex + 1).padStart(2, "0")} / {String(roleFeatures.length).padStart(2, "0")}
            </span>
            <h4>{feature.title}</h4>
            <p className="feature-summary">{feature.summary}</p>
            <p className="feature-detail">{feature.detail}</p>
          </div>
          <figure className="feature-image">
            {feature.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={feature.image} alt={`${feature.title} screenshot`} />
            ) : (
              <span className="flash-shot-empty">Screenshot unavailable</span>
            )}
          </figure>
        </div>
      )}

      <div className="feature-controls">
        <button
          type="button"
          className="feature-arrow"
          aria-label="Previous feature"
          onClick={() => showSlide(currentIndex - 1)}
        >
          ‹
        </button>
        <div className="feature-pagination">
          <div className="feature-dots" aria-label="Choose a feature">
            {roleFeatures.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={currentIndex === index ? "is-active" : ""}
                aria-label={`Show feature ${index + 1}: ${item.title}`}
                aria-current={currentIndex === index ? "step" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <span>{currentIndex + 1} / {roleFeatures.length}</span>
        </div>
        <button
          type="button"
          className="feature-arrow"
          aria-label="Next feature"
          onClick={() => showSlide(currentIndex + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
