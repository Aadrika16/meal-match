import React from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

import {
  FaCheck,
  FaBolt,
  FaCalendarDays,
  FaCrown,
  FaLeaf,
} from "react-icons/fa6";

import "./index.css";


/* =========================================================
   SUBSCRIPTION PLANS
========================================================= */

const plans = [
  {
    id: "trial",
    title: "3 Days Trial",
    subtitle: "Try Meal Match",
    icon: <FaBolt />,
    badge: "START HERE",
  },

  {
    id: "weekly",
    title: "Weekly Plan",
    subtitle: "Stay Consistent",
    icon: <FaCalendarDays />,
    badge: "POPULAR",
  },

  {
    id: "monthly",
    title: "Monthly Plan",
    subtitle: "Build Your Routine",
    icon: <FaCrown />,
    badge: "BEST VALUE",
    recommended: true,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const MealMatchPlans = () => {

  const location = useLocation();
  const navigate = useNavigate();


  /* =========================================================
     GOAL FROM PREVIOUS PAGE
  ========================================================= */

  const selectedGoal =
    location.state?.goal ||
    "Your Goal";


  /* =========================================================
     PLAN CLICK
  ========================================================= */

  const handleSelectPlan = (plan) => {

    navigate(
      "/meal-match-engine",
      {
        state: {
          planId: plan.id,
          planTitle: plan.title,
          goal: selectedGoal,
        },
      }
    );
  };


  return (
    <>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />


      {/* =====================================================
          PLAN PAGE
      ====================================================== */}

      <main className="meal-plans-page">

        {/* BACKGROUND GLOWS */}

        <div
          className="
            meal-plans-glow
            meal-plans-glow-one
          "
        />

        <div
          className="
            meal-plans-glow
            meal-plans-glow-two
          "
        />


        <div className="meal-plans-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <section className="meal-plans-header">

            <div className="meal-plans-brand-icon">

              <FaLeaf />

            </div>


            <span className="meal-plans-eyebrow">

              PERSONALISED NUTRITION

            </span>


            <h1>

              Choose Your

              <span>
                {" "}
                Meal Match Plan.
              </span>

            </h1>


            <p>

              Pick a plan that fits your
              routine and stay consistent
              with meals designed around
              your lifestyle and goals.

            </p>


            <div className="meal-plans-goal">

              <span>
                Your selected goal
              </span>

              <strong>
                {selectedGoal}
              </strong>

            </div>

          </section>


          {/* =================================================
              PLAN CARDS
          ================================================= */}

          <section className="meal-plans-grid">

            {plans.map((plan) => (

              <article
                key={plan.id}
                className={`
                  meal-plan-card
                  ${
                    plan.recommended
                      ? "meal-plan-card-featured"
                      : ""
                  }
                `}
              >

                {/* BADGE */}

                {plan.badge && (

                  <span className="meal-plan-badge">

                    {plan.badge}

                  </span>

                )}


                {/* ICON */}

                <div className="meal-plan-icon">

                  {plan.icon}

                </div>


                {/* SUBTITLE */}

                <span className="meal-plan-subtitle">

                  {plan.subtitle}

                </span>


                {/* TITLE */}

                <h2>

                  {plan.title}

                </h2>


                {/* =================================================
                    BUTTON
                ================================================= */}

                <button
                  type="button"
                  className="meal-plan-select-btn"
                  onClick={() =>
                    handleSelectPlan(plan)
                  }
                >

                  Choose {plan.title}

                  <span className="meal-plan-arrow">
                    →
                  </span>

                </button>

              </article>

            ))}

          </section>


          {/* =================================================
              NOTE
          ================================================= */}

          <div className="meal-plans-note">

            <FaCheck />

            <p>
              You can upgrade or change
              your Meal Match plan anytime.
            </p>

          </div>

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
};

export default MealMatchPlans;