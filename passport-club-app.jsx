import React, { useState, useEffect } from "react";
import {
  Camera,
  Book,
  MapPin,
  Music,
  Palette,
  Utensils,
  Film,
  Plus,
  Share2,
  UserPlus,
} from "lucide-react";

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
const API_URL =
  "https://script.google.com/macros/s/AKfycbylWzlmrDX9bryT6pJ48U961Ler7K2slyfJ3S8s_0SYq_B893pWoG41dm68OCo3ER6v/exec";

// QR Code generation using QR Server API (free, no signup needed)
const generateQRCodeURL = (data) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    data
  )}`;
};

const App = () => {
  const [currentView, setCurrentView] = useState("home"); // 'home', 'signup', 'passport', 'view'
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
    return <Icon className="w-5 h-5" />;
  };

  // Home View
  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <MapPin className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Passport Club
          </h1>
          <p className="text-gray-600">
            Collect memories from around the world
          </p>
        </div>

        {!memberId ? (
          <button
            onClick={() => setCurrentView("signup")}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Create Account
          </button>
        ) : (
          <div className="space-y-3">
            <button
              onClick={() => {
                loadPassportData(memberId);
                setCurrentView("passport");
              }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View My Passport
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("passportMemberId");
                setMemberId(null);
                setMemberData(null);
              }}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition text-sm"
            >
              Sign Out
            </button>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Scan a member's QR code</p>
          <button
            onClick={() => {
              const code = prompt("Enter member code from scanned QR:");
              if (code) {
                loadPassportData(code);
                setCurrentView("view");
              }
            }}
            className="w-full bg-white border-2 border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            View Member Passport
          </button>
        </div>
      </div>
    </div>
  );

  // Signup View
  const SignupView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <button
          onClick={() => setCurrentView("home")}
          className="text-gray-600 mb-4 hover:text-gray-800"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create Your Passport
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400"
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
        <div className="min-h-screen flex items-center justify-center">
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

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setCurrentView("home")}
            className="text-gray-600 mb-4 hover:text-gray-800"
          >
            ← Home
          </button>

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {memberData.member.name}
                </h1>
                <p className="text-sm text-gray-600">
                  Member since{" "}
                  {new Date(memberData.member.createdDate).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => {
                  const qrWindow = window.open("", "_blank");
                  qrWindow.document.write(`
                    <html>
                      <head><title>My Passport QR Code</title></head>
                      <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif;">
                        <h2>Scan to View My Passport</h2>
                        <img src="${generateQRCodeURL(
                          passportURL
                        )}" alt="QR Code" />
                        <p style="margin-top:20px;color:#666;">Share this with other members!</p>
                      </body>
                    </html>
                  `);
                }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share QR
              </button>
            </div>

            {/* QR Code Preview */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <img
                src={generateQRCodeURL(passportURL)}
                alt="Passport QR Code"
                className="w-40 h-40 mx-auto mb-2"
              />
              <p className="text-xs text-gray-600">Your Passport QR Code</p>
            </div>
          </div>

          {/* Stamps Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Countries Visited ({memberData.stamps.length})
            </h2>
            {memberData.stamps.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {memberData.stamps.map((stamp) => (
                  <div
                    key={stamp.id}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border-2 border-indigo-200"
                  >
                    <div className="font-bold text-indigo-900">
                      {stamp.country}
                    </div>
                    <div className="text-sm text-indigo-700">{stamp.city}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {new Date(stamp.dateStamped).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No stamps yet. Attend meetings to collect stamps!
              </p>
            )}
          </div>

          {/* Souvenirs Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Book className="w-5 h-5" />
                My Souvenirs ({memberData.souvenirs.length})
              </h2>
              <button
                onClick={() => setShowAddSouvenir(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            {showAddSouvenir && (
              <form
                onSubmit={handleAddSouvenir}
                className="bg-gray-50 rounded-lg p-4 mb-4"
              >
                <div className="space-y-3">
                  <select
                    value={newSouvenir.type}
                    onChange={(e) =>
                      setNewSouvenir({ ...newSouvenir, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <textarea
                    value={newSouvenir.notes}
                    onChange={(e) =>
                      setNewSouvenir({ ...newSouvenir, notes: e.target.value })
                    }
                    placeholder="Notes (optional)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                      Add Souvenir
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddSouvenir(false)}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            )}

            {memberData.souvenirs.length > 0 ? (
              <div className="space-y-3">
                {memberData.souvenirs.map((souvenir) => (
                  <div
                    key={souvenir.id}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-indigo-600 mt-1">
                        {getSouvenirIcon(souvenir.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">
                            {souvenir.title}
                          </span>
                          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                            {souvenir.type}
                          </span>
                        </div>
                        {souvenir.notes && (
                          <p className="text-sm text-gray-600 mb-1">
                            {souvenir.notes}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          Added{" "}
                          {new Date(souvenir.dateAdded).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
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
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      );

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => {
              setCurrentView("home");
              setMemberData(null);
            }}
            className="text-gray-600 mb-4 hover:text-gray-800"
          >
            ← Back
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {memberData.member.name}'s Passport
            </h1>
            <p className="text-sm text-gray-600">
              Member since{" "}
              {new Date(memberData.member.createdDate).toLocaleDateString()}
            </p>
          </div>

          {/* Stamps - visible to everyone */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Countries Visited ({memberData.stamps.length})
            </h2>
            {memberData.stamps.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {memberData.stamps.map((stamp) => (
                  <div
                    key={stamp.id}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border-2 border-indigo-200"
                  >
                    <div className="font-bold text-indigo-900">
                      {stamp.country}
                    </div>
                    <div className="text-sm text-indigo-700">{stamp.city}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {new Date(stamp.dateStamped).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No stamps yet</p>
            )}
          </div>

          {/* Souvenirs count only - private details */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Souvenirs</h2>
            <p className="text-center text-gray-600 py-4">
              {memberData.member.name} has collected{" "}
              {memberData.souvenirs.length} souvenirs
            </p>
            <p className="text-xs text-gray-500 text-center">
              (Souvenir details are private)
            </p>
          </div>
        </div>
      </div>
    );
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

export default App;
