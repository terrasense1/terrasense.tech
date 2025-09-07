const { useState, useEffect } = React;

function WebsiteMockup() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowDemoForm(false);
        setShowVideoModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const btn =
    "px-6 py-3 text-lg rounded-2xl text-white cursor-pointer transform transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const btnPrimary = `${btn}`;

  return React.createElement('div', { className: "font-sans text-gray-800 flex flex-col min-h-screen" },
    React.createElement('header', { className: "w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-40 animate-fade-in" },
      React.createElement('div', { className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-3" },
        React.createElement('div', { className: "flex items-center gap-2" },
          React.createElement('img', {
            src: "/terrasense_purple_no_text.png",
            alt: "TerraSense Logo",
            height: 40,
            onError: (e) => {
              e.currentTarget.style.display = "none";
              const fb = document.getElementById("logo-fallback-nav");
              if (fb) fb.classList.remove("hidden");
            }
          }),
          React.createElement('span', {
            id: "logo-fallback-nav",
            className: "hidden text-xl font-bold",
            style: { color: "#6E42E8" }
          }, "TerraSense")
        ),
        React.createElement('nav', { className: "hidden md:flex gap-6 text-gray-700" },
          React.createElement('a', { href: "#mission", className: "hover:text-purple-600" }, "Mission"),
          React.createElement('a', { href: "#vision", className: "hover:text-purple-600" }, "Vision"),
          React.createElement('a', { href: "#sensorgrid", className: "hover:text-purple-600" }, "SensorGrid")
        )
      )
    ),

    React.createElement('section', { className: "bg-gradient-to-b from-purple-100 to-white py-32 px-6 text-center" },
      React.createElement('div', { className: "flex justify-center mb-6 animate-fade-in" },
        React.createElement('img', {
          src: "/terrasense_purple_transparent.png",
          alt: "TerraSense Logo",
          // width: 200,
          height: 300,
          className: "mx-auto",
          onError: (e) => {
            e.currentTarget.style.display = "none";
            const fallback = document.getElementById("logo-fallback-hero");
            if (fallback) fallback.classList.remove("hidden");
          }
        }),
        React.createElement('h1', {
          id: "logo-fallback-hero",
          className: "hidden text-4xl md:text-6xl font-bold",
          style: { color: "#6E42E8" }
        }, "TerraSense")
      ),
      React.createElement('p', { className: "text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:200ms]" },
        "Empowering organizations with reliable, scalable, and intelligent remote data tracking solutions that bridge the gap between the physical and digital worlds."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" },
        React.createElement('div', { className: "rounded-2xl shadow-md bg-white animate-fade-in [animation-delay:400ms]" },
          React.createElement('div', { className: "p-6" },
            React.createElement('h2', {
              className: "text-2xl font-semibold mb-4",
              style: { color: "#6E42E8" }
            }, "Mission"),
            React.createElement('p', null,
              "To empower organizations with reliable, scalable, and intelligent remote data tracking solutions that bridge the gap between the physical and digital worlds — enabling smarter decisions for environmental stewardship, industrial efficiency, and beyond."
            )
          )
        ),
        React.createElement('div', { className: "rounded-2xl shadow-md bg-white animate-fade-in [animation-delay:600ms]" },
          React.createElement('div', { className: "p-6" },
            React.createElement('h2', {
              className: "text-2xl font-semibold mb-4",
              style: { color: "#6E42E8" }
            }, "Vision"),
            React.createElement('p', null,
              "To become the global standard for seamless, trusted data sensing and visualization — where every environment, system, and process can be monitored with clarity and insight, driving a more connected, efficient, and sustainable future."
            )
          )
        )
      )
    ),

    React.createElement('section', { id: "sensorgrid", className: "py-20 px-6 bg-gray-50" },
      React.createElement('div', { className: "max-w-5xl mx-auto text-center mb-16 animate-fade-in" },
        React.createElement('img', {
          src: "sensorgrid_purple_transparent.png",
          alt: "SensorGrid",
          height: 300,
          className: "mx-auto mb-4",
          onError: (e) => {
            e.currentTarget.style.display = "none";
            const fallback = document.getElementById("sensorgrid-fallback");
            if (fallback) fallback.classList.remove("hidden");
          }
        }),
        React.createElement('h2', {
          id: "sensorgrid-fallback",
          className: "hidden text-3xl md:text-5xl font-bold mb-4",
          style: { color: "#6E42E8" }
        }, "SensorGrid"),
        React.createElement('p', { className: "text-lg md:text-xl text-gray-600 animate-fade-in [animation-delay:200ms]" },
          "TerraSense's flagship SaaS platform designed for businesses that rely on precise, real-time insights from their environments and operations."
        )
      ),

      React.createElement('div', { className: "grid md:grid-cols-2 gap-10" },
        React.createElement('div', { className: "rounded-2xl shadow-md bg-white animate-fade-in [animation-delay:400ms]" },
          React.createElement('div', { className: "p-6 text-left" },
            React.createElement('h3', {
              className: "text-xl font-semibold mb-3",
              style: { color: "#6E42E8" }
            }, "Key Features"),
            React.createElement('ul', { className: "list-disc ml-6 space-y-2" },
              React.createElement('li', null, "Collect data seamlessly from devices or APIs"),
              React.createElement('li', null, "Visualize and explore with dashboards, maps, and analytics"),
              React.createElement('li', null, "Monitor conditions remotely with alerts"),
              React.createElement('li', null, "Integrate easily with enterprise systems"),
              React.createElement('li', null, "Scale from small deployments to global networks")
            )
          )
        ),
        React.createElement('div', { className: "rounded-2xl shadow-md bg-white animate-fade-in [animation-delay:600ms]" },
          React.createElement('div', { className: "p-6 text-left" },
            React.createElement('h3', {
              className: "text-xl font-semibold mb-3",
              style: { color: "#6E42E8" }
            }, "Industries Served"),
            React.createElement('ul', { className: "list-disc ml-6 space-y-2" },
              React.createElement('li', null, "Environmental Monitoring"),
              React.createElement('li', null, "Agriculture"),
              React.createElement('li', null, "Energy"),
              React.createElement('li', null, "Logistics"),
              React.createElement('li', null, "Manufacturing")
            )
          )
        )
      ),

      React.createElement('div', { className: "text-center mt-12 animate-fade-in [animation-delay:800ms]" },
        React.createElement('div', { className: "flex items-center justify-center gap-4 flex-wrap" },
          React.createElement('button', {
            className: btnPrimary,
            style: { backgroundColor: "#6E42E8" },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#5B35D6",
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#6E42E8",
            onClick: () => setShowVideoModal(true)
          }, "Watch Overview"),

          React.createElement('button', {
            className: btnPrimary,
            style: { backgroundColor: "#6E42E8" },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#5B35D6",
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#6E42E8",
            onClick: () => setShowDemoForm(true)
          }, "Request a Demo")
        )
      )
    ),

    React.createElement('footer', { className: "bg-white border-t border-gray-200 mt-auto py-6 animate-fade-in [animation-delay:1000ms]" },
      React.createElement('div', { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6" },
        React.createElement('div', { className: "flex items-center gap-2" },
          React.createElement('img', {
            src: "/terrasense_purple_no_text.png",
            alt: "TerraSense Logo",
            height: 40,
            onError: (e) => {
              e.currentTarget.style.display = "none";
              const fb = document.getElementById("logo-fallback-footer");
              if (fb) fb.classList.remove("hidden");
            }
          }),
          React.createElement('span', {
            id: "logo-fallback-footer",
            className: "hidden text-lg font-semibold",
            style: { color: "#6E42E8" }
          }, "TerraSense")
        ),
        React.createElement('p', { className: "text-sm text-gray-600" },
          `© ${new Date().getFullYear()} TerraSense. All rights reserved.`
        )
      )
    ),

    showDemoForm && React.createElement('div', { className: "fixed inset-0 z-50 flex items-center justify-center animate-fade-in" },
      React.createElement('div', {
        className: "absolute inset-0 bg-black/50",
        onClick: () => setShowDemoForm(false),
        "aria-hidden": "true"
      }),
      React.createElement('div', { className: "relative bg-white rounded-2xl shadow-xl w-full max-w-xl p-6 mx-4 animate-fade-in [animation-delay:200ms]" },
        React.createElement('button', {
          className: "absolute right-3 top-3 text-gray-500 hover:text-gray-700",
          onClick: () => setShowDemoForm(false),
          "aria-label": "Close"
        }, "×"),
        React.createElement('h2', {
          className: "text-2xl font-bold mb-6 text-center",
          style: { color: "#6E42E8" }
        }, "Request a Demo"),
        React.createElement('form', { className: "space-y-4", onSubmit: (e) => e.preventDefault() },
          React.createElement('input', {
            type: "text",
            placeholder: "Your Name",
            className: "w-full border rounded-lg p-3"
          }),
          React.createElement('input', {
            type: "email",
            placeholder: "Your Email",
            className: "w-full border rounded-lg p-3"
          }),
          React.createElement('input', {
            type: "text",
            placeholder: "Company Name",
            className: "w-full border rounded-lg p-3"
          }),
          React.createElement('textarea', {
            placeholder: "Tell us about your use case",
            className: "w-full border rounded-lg p-3",
            rows: 4
          }),
          React.createElement('button', {
            type: "submit",
            className: `${btnPrimary} w-full`,
            style: { backgroundColor: "#6E42E8" },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#5B35D6",
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#6E42E8"
          }, "Submit Request")
        )
      )
    ),

    showVideoModal && React.createElement('div', { className: "fixed inset-0 z-50 flex items-center justify-center animate-fade-in" },
      React.createElement('div', {
        className: "absolute inset-0 bg-black/60",
        onClick: () => setShowVideoModal(false),
        "aria-hidden": "true"
      }),
      React.createElement('div', { className: "relative bg-white rounded-2xl shadow-xl w-full max-w-4xl p-4 mx-4 animate-fade-in [animation-delay:200ms]" },
        React.createElement('button', {
          className: "absolute right-3 top-3 text-gray-500 hover:text-gray-700",
          onClick: () => setShowVideoModal(false),
          "aria-label": "Close"
        }, "×"),
        React.createElement('div', { className: "relative w-full", style: { paddingTop: "56.25%" } },
          React.createElement('iframe', {
            className: "absolute inset-0 w-full h-full rounded-xl",
            src: "https://www.youtube.com/embed/USe0K5UKwO0?rel=0&modestbranding=1",
            title: "SensorGrid Overview",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true
          })
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(WebsiteMockup), document.getElementById('root'));