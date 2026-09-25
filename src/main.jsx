import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const patients = [
  {
    name: "Maya Chen",
    status: "Follow-up due",
    condition: "Cardiology",
    last: "Today, 9:42 AM",
    score: 92
  },
  {
    name: "James Wilson",
    status: "Stable",
    condition: "Diabetes care",
    last: "Yesterday, 4:18 PM",
    score: 86
  },
  {
    name: "Olivia Brown",
    status: "Needs outreach",
    condition: "Oncology",
    last: "Sep 22, 11:06 AM",
    score: 71
  }
];

function App() {
  const [tab, setTab] = useState("Dashboard");
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <header>
        <div className="brand">
          <span className="logo">H</span>
          <span>HealthFlow</span>
        </div>
        <button className="avatar">BS</button>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">CARE OPERATIONS</p>
            <h1>Good morning, Bill</h1>
            <p className="muted">
              Here’s what needs your attention today.
            </p>
          </div>

          <button className="primary">+ New outreach</button>
        </section>

        <section className="stats">
          <div>
            <span>Patients</span>
            <strong>1,284</strong>
            <small>+8.2% this month</small>
          </div>

          <div>
            <span>Open follow-ups</span>
            <strong>24</strong>
            <small>6 due today</small>
          </div>

          <div>
            <span>Avg. engagement</span>
            <strong>89%</strong>
            <small>+4.1% vs. last month</small>
          </div>
        </section>

        <section className="content">
          <div className="panel">
            <div className="panel-head">
              <div>
                <h2>Patient follow-ups</h2>
                <p className="muted">
                  Prioritized by engagement risk
                </p>
              </div>
              <button className="ghost">View all</button>
            </div>

            <div className="patients">
              {patients.map((patient, index) => (
                <button
                  className="patient"
                  key={patient.name}
                  onClick={() => setSelected(patient)}
                >
                  <div className="person">
                    <span className={`patient-icon i${index}`}>
                      {patient.name[0]}
                    </span>

                    <span>
                      <b>{patient.name}</b>
                      <small>{patient.condition}</small>
                    </span>
                  </div>

                  <span className={`status s${index}`}>
                    {patient.status}
                  </span>

                  <span className="score">
                    {patient.score}%
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="panel activity">
            <div className="panel-head">
              <div>
                <h2>Recent activity</h2>
                <p className="muted">Across care teams</p>
              </div>
            </div>

            <div className="event">
              <span className="dot"></span>
              <div>
                <b>Care plan updated</b>
                <p>Maya Chen · Cardiology</p>
                <small>12 minutes ago</small>
              </div>
            </div>

            <div className="event">
              <span className="dot"></span>
              <div>
                <b>Outreach completed</b>
                <p>James Wilson · Diabetes care</p>
                <small>38 minutes ago</small>
              </div>
            </div>

            <div className="event">
              <span className="dot"></span>
              <div>
                <b>New referral received</b>
                <p>Olivia Brown · Oncology</p>
                <small>1 hour ago</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav>
        {["Dashboard", "Patients", "Analytics", "Settings"].map((item) => (
          <button
            className={tab === item ? "active" : ""}
            onClick={() => setTab(item)}
            key={item}
          >
            <span>
              {item === "Dashboard"
                ? "⌂"
                : item === "Patients"
                ? "◉"
                : item === "Analytics"
                ? "◒"
                : "⚙"}
            </span>
            {item}
          </button>
        ))}
      </nav>

      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="big-icon">
              {selected.name[0]}
            </span>

            <h2>{selected.name}</h2>
            <p className="muted">{selected.condition}</p>

            <div className="detail">
              <span>Engagement score</span>
              <b>{selected.score}%</b>
            </div>

            <div className="detail">
              <span>Status</span>
              <b>{selected.status}</b>
            </div>

            <button
              className="primary wide"
              onClick={() => setSelected(null)}
            >
              Open patient record
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
