"use client";

import { useState } from "react";
import { UserRound, Package, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { profileThemes } from "./profile-theme";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "info", label: "Personal Information", icon: UserRound },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "settings", label: "Account Settings", icon: Settings },
];

export default function ProfileLanding() {
  const styles = profileThemes.default;
  const [activeTab, setActiveTab] = useState("info");

  return (
    <main className={styles.page}>
      {/* Profile Header */}
      <header className={styles.header}>
        <div className="custom-container flex items-center justify-between">
          <div>
            <h1 className={styles.headerTitle}>My Account</h1>
            <p className={styles.headerSubtitle}>View and manage your personal details and orders.</p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-600 border border-slate-200 shadow-sm">
              <span className="text-xl font-bold tracking-wider">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div className="custom-container flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Sidebar Navigation */}
        <nav className={styles.sidebar}>
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  styles.navItem,
                  isActive ? styles.navItemActive : styles.navItemIdle
                )}
              >
                <Icon className="size-5" />
                {tab.label}
              </button>
            );
          })}
          
          <div className="pt-4 mt-6 border-t border-slate-200">
            <button className={cn(styles.navItem, "text-red-500 hover:bg-red-50 hover:text-red-600 active:scale-[0.98]")}>
              <LogOut className="size-5" />
              Sign Out
            </button>
          </div>
        </nav>

        {/* Dynamic Content Area */}
        <section className="flex-1 min-w-0">
          <div className={styles.card}>
            {activeTab === "info" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className={styles.cardTitle}>Personal Information</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={styles.label}>First Name</label>
                      <input type="text" className={styles.input} defaultValue="John" />
                    </div>
                    <div>
                      <label className={styles.label}>Last Name</label>
                      <input type="text" className={styles.input} defaultValue="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className={styles.label}>Email Address</label>
                    <input type="email" className={styles.input} defaultValue="john.doe@example.com" />
                  </div>
                  <div>
                    <label className={styles.label}>Phone Number</label>
                    <input type="tel" className={styles.input} defaultValue="+1 (555) 000-0000" />
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button type="submit" className={styles.primaryButton}>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className={styles.cardTitle}>Order History</h2>
                <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-400 mb-6 border border-slate-100">
                    <Package className="size-10 opacity-60" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No orders yet</h3>
                  <p className="text-slate-500 max-w-sm mb-8">
                    When you place an order, its details and status will appear here.
                  </p>
                  <Button className="rounded-full h-12 px-8 text-sm font-medium bg-slate-900 hover:bg-emerald-900 transition-colors">
                    Start Shopping
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className={styles.cardTitle}>Account Settings</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Order Updates</p>
                          <p className="text-xs text-slate-500 mt-1">Receive emails about your order status.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="size-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      </label>
                      <label className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Promotions & Offers</p>
                          <p className="text-xs text-slate-500 mt-1">Get notified about exclusive sales.</p>
                        </div>
                        <input type="checkbox" className="size-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h3>
                    <div className="flex items-center justify-between p-4 rounded-2xl border border-red-100 bg-red-50/50">
                      <div>
                        <p className="font-medium text-red-900 text-sm">Delete Account</p>
                        <p className="text-xs text-red-700/80 mt-1">Permanently remove your data.</p>
                      </div>
                      <button className="h-10 rounded-full bg-white px-5 text-xs font-semibold text-red-600 border border-red-200 shadow-sm hover:bg-red-50 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
