const { useState, useEffect } = React;

// Icon Components
const Camera = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const Book = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Music = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Palette = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const Utensils = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const Film = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Share2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const UserPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
const API_URL =
  "https://script.google.com/macros/s/AKfycbylWzlmrDX9bryT6pJ48U961Ler7K2slyfJ3S8s_0SYq_B893pWoG41dm68OCo3ER6v/exec";

// QR Code generation using QR Server API (free, no signup needed)
const generateQRCodeURL = (data) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    data
  )}`;
};

// Home View
const HomeView = () => (
  <div style={{minHeight:"100vh",background:"linear-gradient(135deg, #fff6c5 0%, #468457 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
    <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 20px 25px -5px rgba(0,0,0,0.1)",padding:"2rem",maxWidth:"28rem",width:"100%",textAlign:"center"}}>
      <div style={{marginBottom:"1.5rem"}}>
        <div style={{width:"4rem",height:"4rem",margin:"0 auto 1rem",color:"#468457"}}>
          <MapPin />
        </div>
        <h1 style={{fontSize:"1.875rem",fontWeight:"bold",color:"#1f2937",marginBottom:"0.5rem"}}>Banana Club</h1>
        <p style={{color:"#4b5563"}}>Collect memories from around the world</p>
      </div>

      {!memberId ? (
        <button
          onClick={() => setCurrentView("signup")}
          style={{width:"100%",background:"#468457",color:"white",padding:"0.75rem",borderRadius:"0.5rem",fontWeight:"600",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",transition:"all 0.2s"}}
          onMouseOver={(e) => e.target.style.background="#3a6e48"}
          onMouseOut={(e) => e.target.style.background="#468457"}
        >
          <UserPlus />
          Create Account
        </button>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <button
            onClick={() => {
              loadPassportData(memberId);
              setCurrentView("passport");
            }}
            style={{width:"100%",background:"#468457",color:"white",padding:"0.75rem",borderRadius:"0.5rem",fontWeight:"600",border:"none",cursor:"pointer",transition:"all 0.2s"}}
            onMouseOver={(e) => e.target.style.background="#3a6e48"}
            onMouseOut={(e) => e.target.style.background="#468457"}
          >
            View My Passport
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("passportMemberId");
              setMemberId(null);
              setMemberData(null);
            }}
            style={{width:"100%",background:"#e5e7eb",color:"#374151",padding:"0.5rem",borderRadius:"0.5rem",border:"none",cursor:"pointer",fontSize:"0.875rem",transition:"all 0.2s"}}
            onMouseOver={(e) => e.target.style.background="#d1d5db"}
            onMouseOut={(e) => e.target.style.background="#e5e7eb"}
          >
            Sign Out
          </button>
        </div>
      )}

      <div style={{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #e5e7eb"}}>
        <p style={{fontSize:"0.875rem",color:"#4b5563",marginBottom:"0.75rem"}}>Scan a member's QR code</p>
        <button
          onClick={() => {
            const code = prompt("Enter member code from scanned QR:");
            if (code) {
              loadPassportData(code);
              setCurrentView("view");
            }
          }}
          style={{width:"100%",background:"white",border:"2px solid #468457",color:"#468457",padding:"0.5rem",borderRadius:"0.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",transition:"all 0.2s",fontWeight:"500"}}
          onMouseOver={(e) => e.target.style.background="#f0fdf4"}
          onMouseOut={(e) => e.target.style.background="white"}
        >
          <Camera />
          View Member Passport
        </button>
      </div>
    </div>
  </div>
);

// Signup View
const SignupView = () => (
  <div style={{minHeight:"100vh",background:"linear-gradient(135deg, #fff6c5 0%, #468457 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
    <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 20px 25px -5px rgba(0,0,0,0.1)",padding:"2rem",maxWidth:"28rem",width:"100%"}}>
      <button
        onClick={() => setCurrentView("home")}
        style={{color:"#4b5563",marginBottom:"1rem",background:"none",border:"none",cursor:"pointer",fontSize:"1rem"}}
      >
        ← Back
      </button>

      <h2 style={{fontSize:"1.5rem",fontWeight:"bold",color:"#1f2937",marginBottom:"1.5rem"}}>
        Create Your Passport
      </h2>

      <form onSubmit={handleSignup} style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div>
          <label style={{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.5rem"}}>
            Your Name
          </label>
          <input
            type="text"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            style={{width:"100%",padding:"0.75rem 1rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",boxSizing:"border-box"}}
            placeholder="Enter your full name"
            required
            autoFocus
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{width:"100%",background:loading?"#9ca3af":"#468457",color:"white",padding:"0.75rem",borderRadius:"0.5rem",fontWeight:"600",border:"none",cursor:loading?"not-allowed":"pointer",transition:"all 0.2s"}}
          onMouseOver={(e) => !loading && (e.target.style.background="#3a6e48")}
          onMouseOut={(e) => !loading && (e.target.style.background="#468457")}
        >
          {loading ? "Creating..." : "Create Passport"}
        </button>
      </form>
    </div>
  </div>
);

// Passport View (Owner's view with add functionality)
const PassportView = () => {
  const [showAddSouvenir, setShowAddSouvenir] = useState(false);
  const [newSouvenir, setNewSouvenir] = useState({
    type: "book",
    title: "",
    notes: "",
  });

  if (!memberData)
    return (
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Loading...
      </div>
    );

  const handleAddSouvenir = async (e) => {
    e.preventDefault();
    await addSouvenir(newSouvenir.type, newSouvenir.title, newSouvenir.notes);
    setNewSouvenir({ type: "book", title: "", notes: "" });
    setShowAddSouvenir(false);
  };

  const passportURL = `${window.location.origin}?view=${memberId}`;

  const stampColors = [
    {bg:"linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)", border:"#f59e0b", text:"#78350f"},
    {bg:"linear-gradient(135deg, #dbeafe 0%, #60a5fa 100%)", border:"#3b82f6", text:"#1e3a8a"},
    {bg:"linear-gradient(135deg, #fce7f3 0%, #f472b6 100%)", border:"#ec4899", text:"#831843"},
    {bg:"linear-gradient(135deg, #f3e8ff 0%, #c084fc 100%)", border:"#a855f7", text:"#581c87"},
    {bg:"linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%)", border:"#10b981", text:"#064e3b"},
    {bg:"linear-gradient(135deg, #fed7aa 0%, #fb923c 100%)", border:"#f97316", text:"#7c2d12"}
  ];

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg, #fff6c5 0%, #468457 100%)",padding:"1rem",paddingBottom:"5rem"}}>
      <div style={{maxWidth:"42rem",margin:"0 auto"}}>
        <button
          onClick={() => setCurrentView("home")}
          style={{color:"#1f2937",marginBottom:"1rem",background:"none",border:"none",cursor:"pointer",fontSize:"1rem"}}
        >
          ← Home
        </button>

        {/* Header */}
        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem",marginBottom:"1.5rem"}}>
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem",flexWrap:"wrap",gap:"1rem"}}>
            <div>
              <h1 style={{fontSize:"clamp(1.5rem, 5vw, 1.875rem)",fontWeight:"bold",color:"#1f2937",marginBottom:"0.25rem"}}>
                {memberData.member.name}
              </h1>
              <p style={{fontSize:"0.875rem",color:"#4b5563"}}>
                Member since{" "}
                {new Date(memberData.member.createdDate).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => {
                const qrWindow = window.open("", "_blank");
                qrWindow.document.write(`
                    <html>
                      <head><title>My Passport QR Code</title><meta name="viewport" content="width=device-width,initial-scale=1"></head>
                      <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif;padding:1rem;">
                        <h2>Scan to View My Passport</h2>
                        <img src="${generateQRCodeURL(passportURL)}" alt="QR Code" style="max-width:100%;height:auto;" />
                        <p style="margin-top:20px;color:#666;">Share this with other members!</p>
                      </body>
                    </html>
                  `);
              }}
              style={{background:"#468457",color:"white",padding:"0.5rem 1rem",borderRadius:"0.5rem",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem",whiteSpace:"nowrap"}}
            >
              <Share2 />
              Share QR
            </button>
          </div>

          {/* QR Code Preview */}
          <div style={{background:"#f9fafb",borderRadius:"0.5rem",padding:"1rem",textAlign:"center"}}>
            <img
              src={generateQRCodeURL(passportURL)}
              alt="Passport QR Code"
              style={{width:"10rem",height:"10rem",margin:"0 auto 0.5rem",maxWidth:"100%"}}
            />
            <p style={{fontSize:"0.75rem",color:"#4b5563"}}>Your Passport QR Code</p>
          </div>
        </div>

        {/* Stamps Section */}
        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem",marginBottom:"1.5rem"}}>
          <h2 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#1f2937",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <div style={{color:"#468457"}}><MapPin /></div>
            Countries Visited ({memberData.stamps.length})
          </h2>
          {memberData.stamps.length > 0 ? (
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"0.75rem"}}>
              {memberData.stamps.map((stamp, idx) => {
                const colorScheme = stampColors[idx % stampColors.length];
                return (
                  <div
                    key={stamp.id}
                    style={{background:colorScheme.bg,borderRadius:"0.5rem",padding:"1rem",border:`2px solid ${colorScheme.border}`}}
                  >
                    <div style={{fontWeight:"bold",color:colorScheme.text,fontSize:"0.9rem"}}>
                      {stamp.country}
                    </div>
                    <div style={{fontSize:"0.8rem",color:colorScheme.text,opacity:0.8}}>{stamp.city}</div>
                    <div style={{fontSize:"0.7rem",color:"#4b5563",marginTop:"0.25rem"}}>
                      {new Date(stamp.dateStamped).toLocaleDateString()}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{color:"#6b7280",textAlign:"center",padding:"1rem"}}>
              No stamps yet. Attend meetings to collect stamps!
            </p>
          )}
        </div>

        {/* Souvenirs Section */}
        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"}}>
            <h2 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#1f2937",display:"flex",alignItems:"center",gap:"0.5rem"}}>
              <div style={{color:"#468457"}}><Book /></div>
              My Souvenirs ({memberData.souvenirs.length})
            </h2>
            <button
              onClick={() => setShowAddSouvenir(true)}
              style={{background:"#10b981",color:"white",padding:"0.5rem 1rem",borderRadius:"0.5rem",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem"}}
            >
              <Plus />
              Add
            </button>
          </div>

          {showAddSouvenir && (
            <form
              onSubmit={handleAddSouvenir}
              style={{background:"#f9fafb",borderRadius:"0.5rem",padding:"1rem",marginBottom:"1rem"}}
            >
              <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                <select
                  value={newSouvenir.type}
                  onChange={(e) =>
                    setNewSouvenir({ ...newSouvenir, type: e.target.value })
                  }
                  style={{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem"}}
                >
                  <option value="book">Book</option>
                  <option value="art">Art</option>
                  <option value="movie">Movie</option>
                  <option value="song">Song</option>
                  <option value="recipe">Recipe</option>
                </select>
                <input
                  type="text"
                  value={newSouvenir.title}
                  onChange={(e) =>
                    setNewSouvenir({ ...newSouvenir, title: e.target.value })
                  }
                  placeholder="Title"
                  style={{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",boxSizing:"border-box"}}
                  required
                />
                <textarea
                  value={newSouvenir.notes}
                  onChange={(e) =>
                    setNewSouvenir({ ...newSouvenir, notes: e.target.value })
                  }
                  placeholder="Notes (optional)"
                  style={{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"1rem",resize:"vertical",boxSizing:"border-box"}}
                  rows="2"
                />
                <div style={{display:"flex",gap:"0.5rem"}}>
                  <button
                    type="submit"
                    style={{flex:"1",background:"#10b981",color:"white",padding:"0.5rem",borderRadius:"0.5rem",border:"none",cursor:"pointer"}}
                  >
                    Add Souvenir
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddSouvenir(false)}
                    style={{flex:"1",background:"#d1d5db",color:"#374151",padding:"0.5rem",borderRadius:"0.5rem",border:"none",cursor:"pointer"}}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}

          {memberData.souvenirs.length > 0 ? (
            <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
              {memberData.souvenirs.map((souvenir) => (
                <div
                  key={souvenir.id}
                  style={{background:"#f9fafb",borderRadius:"0.5rem",padding:"1rem",border:"1px solid #e5e7eb"}}
                >
                  <div style={{display:"flex",alignItems:"flex-start",gap:"0.75rem"}}>
                    <div style={{color:"#468457",marginTop:"0.25rem",flexShrink:0}}>
                      {getSouvenirIcon(souvenir.type)}
                    </div>
                    <div style={{flex:"1",minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.25rem",flexWrap:"wrap"}}>
                        <span style={{fontWeight:"600",color:"#1f2937",wordBreak:"break-word"}}>
                          {souvenir.title}
                        </span>
                        <span style={{fontSize:"0.75rem",background:"#e0f2e9",color:"#468457",padding:"0.125rem 0.5rem",borderRadius:"0.25rem",flexShrink:0}}>
                          {souvenir.type}
                        </span>
                      </div>
                      {souvenir.notes && (
                        <p style={{fontSize:"0.875rem",color:"#4b5563",marginBottom:"0.25rem"}}>
                          {souvenir.notes}
                        </p>
                      )}
                      <p style={{fontSize:"0.75rem",color:"#6b7280"}}>
                        Added{" "}
                        {new Date(souvenir.dateAdded).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{color:"#6b7280",textAlign:"center",padding:"1rem"}}>
              No souvenirs yet. Add your first one!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// View Only (for scanning others' QR codes)
const ViewOnlyPassport = () => {
  if (!memberData)
    return (
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Loading...
      </div>
    );

  const stampColors = [
    {bg:"linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)", border:"#f59e0b", text:"#78350f"},
    {bg:"linear-gradient(135deg, #dbeafe 0%, #60a5fa 100%)", border:"#3b82f6", text:"#1e3a8a"},
    {bg:"linear-gradient(135deg, #fce7f3 0%, #f472b6 100%)", border:"#ec4899", text:"#831843"},
    {bg:"linear-gradient(135deg, #f3e8ff 0%, #c084fc 100%)", border:"#a855f7", text:"#581c87"},
    {bg:"linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%)", border:"#10b981", text:"#064e3b"},
    {bg:"linear-gradient(135deg, #fed7aa 0%, #fb923c 100%)", border:"#f97316", text:"#7c2d12"}
  ];

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg, #fff6c5 0%, #468457 100%)",padding:"1rem"}}>
      <div style={{maxWidth:"42rem",margin:"0 auto"}}>
        <button
          onClick={() => {
            setCurrentView("home");
            setMemberData(null);
          }}
          style={{color:"#1f2937",marginBottom:"1rem",background:"none",border:"none",cursor:"pointer",fontSize:"1rem"}}
        >
          ← Back
        </button>

        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem",marginBottom:"1.5rem"}}>
          <h1 style={{fontSize:"clamp(1.5rem, 5vw, 1.875rem)",fontWeight:"bold",color:"#1f2937",marginBottom:"0.25rem"}}>
            {memberData.member.name}'s Passport
          </h1>
          <p style={{fontSize:"0.875rem",color:"#4b5563"}}>
            Member since{" "}
            {new Date(memberData.member.createdDate).toLocaleDateString()}
          </p>
        </div>

        {/* Stamps - visible to everyone */}
        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem",marginBottom:"1.5rem"}}>
          <h2 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#1f2937",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <div style={{color:"#468457"}}><MapPin /></div>
            Countries Visited ({memberData.stamps.length})
          </h2>
          {memberData.stamps.length > 0 ? (
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"0.75rem"}}>
              {memberData.stamps.map((stamp, idx) => {
                const colorScheme = stampColors[idx % stampColors.length];
                return (
                  <div
                    key={stamp.id}
                    style={{background:colorScheme.bg,borderRadius:"0.5rem",padding:"1rem",border:`2px solid ${colorScheme.border}`}}
                  >
                    <div style={{fontWeight:"bold",color:colorScheme.text,fontSize:"0.9rem"}}>
                      {stamp.country}
                    </div>
                    <div style={{fontSize:"0.8rem",color:colorScheme.text,opacity:0.8}}>{stamp.city}</div>
                    <div style={{fontSize:"0.7rem",color:"#4b5563",marginTop:"0.25rem"}}>
                      {new Date(stamp.dateStamped).toLocaleDateString()}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{color:"#6b7280",textAlign:"center",padding:"1rem"}}>No stamps yet</p>
          )}
        </div>

        {/* Souvenirs count only - private details */}
        <div style={{background:"white",borderRadius:"1.5rem",boxShadow:"0 10px 15px -3px rgba(0,0,0,0.1)",padding:"1.5rem"}}>
          <h2 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#1f2937",marginBottom:"1rem"}}>Souvenirs</h2>
          <p style={{textAlign:"center",color:"#4b5563",padding:"1rem"}}>
            {memberData.member.name} has collected {memberData.souvenirs.length}{" "}
            souvenirs
          </p>
          <p style={{fontSize:"0.75rem",color:"#6b7280",textAlign:"center"}}>
            (Souvenir details are private)
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [memberId, setMemberId] = useState(null);
  const [memberData, setMemberData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signupName, setSignupName] = useState("");

  // Load member ID from localStorage on mount
  useEffect(() => {
    const savedMemberId = localStorage.getItem("passportMemberId");
    if (savedMemberId) {
      setMemberId(savedMemberId);
      loadPassportData(savedMemberId);
    }
  }, []);

  // API calls
  const apiCall = async (action, data) => {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action, data }),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!signupName.trim()) return;

    setLoading(true);
    try {
      const result = await apiCall("createMember", { name: signupName });
      if (result.success) {
        setMemberId(result.memberId);
        localStorage.setItem("passportMemberId", result.memberId);
        await loadPassportData(result.memberId);
        setCurrentView("passport");
      }
    } catch (error) {
      alert("Error creating account: " + error.message);
    }
    setLoading(false);
  };

  const loadPassportData = async (id) => {
    setLoading(true);
    try {
      const result = await apiCall("getPassport", { memberId: id });
      if (result.success) {
        setMemberData(result.passport);
      }
    } catch (error) {
      console.error("Error loading passport:", error);
    }
    setLoading(false);
  };

  const addSouvenir = async (type, title, notes = "") => {
    if (!memberId) return;
    setLoading(true);
    try {
      await apiCall("addSouvenir", { memberId, type, title, notes });
      await loadPassportData(memberId);
    } catch (error) {
      alert("Error adding souvenir: " + error.message);
    }
    setLoading(false);
  };

  const getSouvenirIcon = (type) => {
    const icons = {
      book: Book,
      art: Palette,
      movie: Film,
      song: Music,
      recipe: Utensils,
    };
    const Icon = icons[type] || Book;
    return <Icon />;
  };

  // Handle URL parameter for viewing other members
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewMemberId = urlParams.get("view");
    if (viewMemberId) {
      loadPassportData(viewMemberId);
      setCurrentView("view");
    }
  }, []);

  // Render current view
  return (
    <>
      {currentView === "home" && <HomeView />}
      {currentView === "signup" && <SignupView />}
      {currentView === "passport" && <PassportView />}
      {currentView === "view" && <ViewOnlyPassport />}
    </>
  );
};
