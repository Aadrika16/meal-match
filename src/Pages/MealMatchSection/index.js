import React, {
  useRef,
  useState,
} from "react";

import { useLocation } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import MealMatchEngine from "../../component/MealMatchEngine";

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

  const selectedGoal =
    location.state?.goal ||
    "Your Goal";


  /* =========================================================
     SELECTED PLAN
  ========================================================= */

  const [
    selectedPlan,
    setSelectedPlan,
  ] = useState(null);


  /* =========================================================
     ENGINE VISIBILITY
  ========================================================= */

  const [
    showMealEngine,
    setShowMealEngine,
  ] = useState(false);


  /* =========================================================
     ENGINE REFERENCE
  ========================================================= */

  const engineRef =
    useRef(null);


  /* =========================================================
     SELECT PLAN
  ========================================================= */

  const handleSelectPlan = (
    planId
  ) => {

    setSelectedPlan(planId);

    setShowMealEngine(true);


    /*
      Wait until engine renders
      before scrolling.
    */

    setTimeout(() => {

      engineRef.current
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }, 150);
  };


  return (
    <>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />


      {/* =====================================================
          PLANS PAGE
      ====================================================== */}

      <main className="meal-plans-page">

        {/* BACKGROUND GLOW */}

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

            {plans.map((plan) => {

              const isSelected =
                selectedPlan === plan.id;


              return (

                <article
                  key={plan.id}
                  className={`
                    meal-plan-card

                    ${
                      plan.recommended
                        ? "meal-plan-card-featured"
                        : ""
                    }

                    ${
                      isSelected
                        ? "meal-plan-card-selected"
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


                  {/* PLAN ICON */}

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
                      SELECT PLAN BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    className={`
                      meal-plan-select-btn

                      ${
                        isSelected
                          ? "meal-plan-select-btn-active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      handleSelectPlan(
                        plan.id
                      )
                    }
                  >

                    {isSelected
                      ? "Continue With This Plan"
                      : `Choose ${plan.title}`
                    }


                    <span className="meal-plan-arrow">
                      →
                    </span>

                  </button>

                </article>

              );
            })}

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
          MEAL MATCH ENGINE
      ====================================================== */}

      {showMealEngine && (

        <section
          ref={engineRef}
          className="selected-plan-engine-section"
        >

          <MealMatchEngine
            initialGoal={selectedGoal}
          />

        </section>

      )}


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
};

export default MealMatchPlans;