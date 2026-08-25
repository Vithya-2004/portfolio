import React, { useState } from 'react';
import { X, ExternalLink, Code2, Layers, CheckCircle2, ShieldCheck, Database, Send, Truck, Clock } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'tech'>('overview');

  // Interactive state for Fuel Delivery Simulator
  const [fuelType, setFuelType] = useState('Diesel');
  const [liters, setLiters] = useState(250);
  const [fuelAddress, setFuelAddress] = useState('Thillai Nagar, Tiruchirappalli');
  const [fuelOrders, setFuelOrders] = useState([
    { id: 'ORD-8821', type: 'Diesel', liters: 500, status: 'In Transit', driver: 'Senthil K.', eta: '18 mins' },
    { id: 'ORD-8820', type: 'Petrol', liters: 120, status: 'Delivered', driver: 'Murugan R.', eta: 'Completed' },
  ]);
  const [fuelNotification, setFuelNotification] = useState('');

  const handleSimulateFuelOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: newId,
      type: fuelType,
      liters: Number(liters),
      status: 'Dispatched',
      driver: 'Rajesh V.',
      eta: '25 mins'
    };
    setFuelOrders([newOrder, ...fuelOrders]);
    setFuelNotification(`✓ Order ${newId} placed successfully! Tanker dispatched to ${fuelAddress}`);
    setTimeout(() => setFuelNotification(''), 4500);
  };

  // Interactive state for Citizen Connect Simulator
  const [citizenCategory, setCitizenCategory] = useState('Streetlight Repair');
  const [citizenDescription, setCitizenDescription] = useState('Streetlight not functioning near Main Cross 3rd street.');
  const [citizenRequests, setCitizenRequests] = useState([
    { id: 'REQ-4029', category: 'Road Maintenance', dept: 'Public Works', status: 'Work in Progress', step: 2 },
    { id: 'REQ-4018', category: 'Waste Management', dept: 'Sanitation', status: 'Resolved', step: 3 },
  ]);
  const [citizenNotification, setCitizenNotification] = useState('');

  const handleSimulateCitizenRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `REQ-${Math.floor(4000 + Math.random() * 1000)}`;
    const newReq = {
      id: newId,
      category: citizenCategory,
      dept: citizenCategory.includes('Streetlight') ? 'Electrical' : 'Civic Works',
      status: 'Submitted & Assigned',
      step: 1
    };
    setCitizenRequests([newReq, ...citizenRequests]);
    setCitizenNotification(`✓ Request ${newId} logged! Municipality ticket generated.`);
    setTimeout(() => setCitizenNotification(''), 4500);
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#09183d]/95 backdrop-blur-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-[0_25px_60px_rgba(0,10,35,0.8)] border border-white/15 overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#071330]/80">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            <div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white">
                {project.title}
              </h3>
              <p className="text-xs text-sky-200">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#061028]/60 px-6 pt-3 gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-sky-400 text-sky-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Project Details
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'border-sky-400 text-sky-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Live Interactive Demo</span>
            <span className="bg-blue-500/30 text-sky-200 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-400/30">
              Simulator
            </span>
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tech'
                ? 'border-sky-400 text-sky-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Schema
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Hero Preview */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-video max-h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="font-['Montserrat'] font-bold text-base text-white mb-2">
                  System Overview
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                  <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    Core Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                    <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3">
                      Key Engineering Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                          <div className="font-['Montserrat'] font-bold text-sm text-sky-300">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-300 mt-1 font-medium leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0b1b42]/70 p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-semibold text-slate-300 mb-2">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/5 border border-white/10 text-sky-200 px-2.5 py-1 rounded text-xs font-mono font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-6">
              {project.demoType === 'fuel' ? (
                <div className="space-y-5">
                  <div className="bg-blue-500/20 border border-blue-400/30 p-4 rounded-xl flex items-start gap-3">
                    <Truck className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                    <div className="text-xs text-sky-100">
                      <span className="font-bold text-sky-300">Live Fuel Dispatch Simulator:</span> Test the order dispatching workflow. Placing an order updates the active vehicle fleet tracking and generates real-time delivery estimates.
                    </div>
                  </div>

                  {fuelNotification && (
                    <div className="p-3 bg-emerald-950/60 border border-emerald-400/40 text-emerald-300 text-xs font-semibold rounded-lg flex items-center gap-2 animate-in fade-in duration-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{fuelNotification}</span>
                    </div>
                  )}

                  {/* Simulator Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Order Booking Form */}
                    <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                      <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3">
                        Simulate Fuel Booking
                      </h4>
                      <form onSubmit={handleSimulateFuelOrder} className="space-y-3">
                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Fuel Type</label>
                          <select
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg bg-slate-900/80 border border-white/20 text-white"
                          >
                            <option value="Diesel">High-Speed Diesel (HSD)</option>
                            <option value="Petrol">Premium Petrol (MS)</option>
                            <option value="Bio-Fuel">Bio-Diesel B20</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">
                            Quantity: <span className="font-bold text-sky-300">{liters} Liters</span>
                          </label>
                          <input
                            type="range"
                            min="50"
                            max="2000"
                            step="50"
                            value={liters}
                            onChange={(e) => setLiters(Number(e.target.value))}
                            className="w-full accent-sky-400"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Delivery Destination</label>
                          <input
                            type="text"
                            value={fuelAddress}
                            onChange={(e) => setFuelAddress(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg bg-slate-900/80 border border-white/20 text-white"
                            placeholder="Enter site / generator location"
                          />
                        </div>

                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs flex justify-between">
                          <span className="text-slate-300">Est. Cost (@₹94/L):</span>
                          <span className="font-bold text-sky-300">₹{(liters * 94).toLocaleString('en-IN')}</span>
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-royal text-white py-2.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Fuel Tanker</span>
                        </button>
                      </form>
                    </div>

                    {/* Live Dispatch Log */}
                    <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-['Montserrat'] font-bold text-sm text-white">
                          Active Fleet Deliveries
                        </h4>
                        <span className="text-[11px] bg-blue-500/30 text-sky-200 border border-blue-400/30 px-2 py-0.5 rounded font-semibold">
                          Live Status
                        </span>
                      </div>

                      <div className="space-y-2.5 overflow-y-auto max-h-64 flex-grow">
                        {fuelOrders.map((ord) => (
                          <div key={ord.id} className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-mono font-bold text-sky-300">{ord.id}</span>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  ord.status === 'Delivered'
                                    ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-400/30'
                                    : 'bg-amber-900/60 text-amber-300 border border-amber-400/30'
                                }`}
                              >
                                {ord.status}
                              </span>
                            </div>
                            <div className="text-slate-300 flex justify-between">
                              <span>{ord.type} ({ord.liters} L)</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-sky-400" /> {ord.eta}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 mt-1">
                              Assigned Driver: <span className="font-semibold text-slate-200">{ord.driver}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="bg-blue-500/20 border border-blue-400/30 p-4 rounded-xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                    <div className="text-xs text-sky-100">
                      <span className="font-bold text-sky-300">Citizen Grievance Lifecycle Simulator:</span> Submit a public works or civic issue to simulate ticket dispatch, status transitions, and resolution monitoring.
                    </div>
                  </div>

                  {citizenNotification && (
                    <div className="p-3 bg-emerald-950/60 border border-emerald-400/40 text-emerald-300 text-xs font-semibold rounded-lg flex items-center gap-2 animate-in fade-in duration-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{citizenNotification}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Log New Civic Issue */}
                    <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                      <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3">
                        Log Civic Request
                      </h4>
                      <form onSubmit={handleSimulateCitizenRequest} className="space-y-3">
                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Service Category</label>
                          <select
                            value={citizenCategory}
                            onChange={(e) => setCitizenCategory(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg bg-slate-900/80 border border-white/20 text-white"
                          >
                            <option value="Streetlight Repair">Streetlight Repair (Electrical)</option>
                            <option value="Waste Disposal">Waste Disposal & Bin Clearance (Sanitation)</option>
                            <option value="Pot Hole / Road Patch">Road & Pothole Maintenance</option>
                            <option value="Water Supply Issue">Public Drinking Water Supply</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1">Description / Location</label>
                          <textarea
                            rows={3}
                            value={citizenDescription}
                            onChange={(e) => setCitizenDescription(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg bg-slate-900/80 border border-white/20 text-white"
                            placeholder="Provide brief details about the issue..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-royal text-white py-2.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Civic Request</span>
                        </button>
                      </form>
                    </div>

                    {/* Citizen Request Tracker Board */}
                    <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                      <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3">
                        Citizen Request Tracker
                      </h4>
                      <div className="space-y-3 overflow-y-auto max-h-64">
                        {citizenRequests.map((req) => (
                          <div key={req.id} className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="font-mono font-bold text-sky-300">{req.id}</span>
                              <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded font-medium">
                                Dept: {req.dept}
                              </span>
                            </div>
                            <div className="font-medium text-white mb-2">{req.category}</div>
                            
                            {/* Visual Progress Steps */}
                            <div className="flex items-center gap-1.5 pt-1">
                              <span className={`w-2.5 h-2.5 rounded-full ${req.step >= 1 ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-slate-600'}`}></span>
                              <span className="text-[10px] text-slate-300">Logged</span>
                              <span className="flex-1 h-0.5 bg-white/10"></span>
                              <span className={`w-2.5 h-2.5 rounded-full ${req.step >= 2 ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-slate-600'}`}></span>
                              <span className="text-[10px] text-slate-300">Assigned</span>
                              <span className="flex-1 h-0.5 bg-white/10"></span>
                              <span className={`w-2.5 h-2.5 rounded-full ${req.step >= 3 ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-slate-600'}`}></span>
                              <span className="text-[10px] text-slate-300">Resolved</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-5">
              <div className="bg-[#0b1b42]/70 p-5 rounded-xl border border-white/10">
                <h4 className="font-['Montserrat'] font-bold text-sm text-white mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-sky-400" />
                  System Architecture & Database Design
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((arch, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                      <Code2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Preview */}
              <div className="bg-[#040a1c] text-gray-200 p-5 rounded-xl font-mono text-xs overflow-x-auto border border-white/10">
                <div className="text-slate-400 mb-2">// Code Implementation Snippet ({project.tags[0]})</div>
                {project.demoType === 'fuel' ? (
                  <pre className="text-sky-300 leading-relaxed">
{`<?php
// Secure Order Dispatch Controller with Prepared Statements
function dispatchFuelOrder($conn, $customerId, $liters, $fuelType, $address) {
    $stmt = $conn->prepare("INSERT INTO orders (customer_id, liters, fuel_type, address, status, created_at) VALUES (?, ?, ?, ?, 'DISPATCHED', NOW())");
    $stmt->bind_param("idss", $customerId, $liters, $fuelType, $address);
    if ($stmt->execute()) {
        $orderId = $conn->insert_id;
        updateInventoryLedger($conn, $fuelType, $liters);
        return ["status" => "success", "order_id" => $orderId];
    }
    return ["status" => "error", "message" => $stmt->error];
}
?>`}
                  </pre>
                ) : (
                  <pre className="text-sky-300 leading-relaxed">
{`// Dynamic Ticket Management & DOM Observer
function handleCitizenSubmission(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const ticket = {
    id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
    category: formData.get('category'),
    description: formData.get('description'),
    timestamp: new Date().toISOString(),
    status: 'IN_PROGRESS'
  };
  saveToLocalStorage(ticket);
  renderTicketCard(ticket);
  showToast('Civic request logged successfully!');
}`}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#071330]/80 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Developed by Vithya S</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="btn-glass px-5 py-2 text-xs font-semibold rounded-lg cursor-pointer"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal text-white px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>GitHub Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
