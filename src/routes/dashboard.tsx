import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  LayoutGrid,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  Layers3,
  CircleCheck,
  CircleX,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  Building2,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

const getInitials = (fullName: string): string => {
  const names = fullName.trim().split(" ").filter(Boolean);

  if (names.length === 1) {
    return names[0][0].toUpperCase();
  }

  return (
    names[0][0] +
    names[names.length - 1][0]
  ).toUpperCase();
};

function Dashboard() {
    const [activeTab, setActiveTab] = useState("all");
    type DemoRequest = {
  _id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companyEmail: string;
  phoneNumber: string;
  role: string;
  location: string;
  message: string;
  status: string;
  createdAt: string;
  approvedAt: string | null;
rejectedAt: string | null;
};
    const [requests, setRequests] = useState<DemoRequest[]>([]);

    const tabs = [
  { key: "all", label: "All Requests" },
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
];

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    try {
      const res = await axios.get(
        "https://detection-forge-server.vercel.app/api/allDemoRequests"
      );
      console.log(res.data)
      console.log(res.data.requests)
      console.log(res.data.requests[0].firstName)
      setRequests(res.data.requests);
    } catch (err) {
      console.log(err);
    }
  };

  
  const handleApprove = async (id: string) => {
  try {
    const res = await axios.patch(
      `https://detection-forge-server.vercel.app/api/${id}/approve`
    );

    console.log(res.data);

    await getRequests();

    toast.success("Request approved");
  } catch (err) {
    console.log(err);
    toast.error("Failed to approve request");
  }
};

const handleReject = async (id: string) => {
  try {
    const res = await axios.patch(
      `https://detection-forge-server.vercel.app/api/demoRequests/${id}/reject`
    );

    console.log(res.data);

    await getRequests();

    toast.success("Request rejected");
  } catch (err) {
    console.log(err);
    toast.error("Failed to reject request");
  }
};

const allCount = requests.length;
const pendingCount = requests.filter(r => r.status === "pending").length;
const approvedCount = requests.filter(r => r.status === "approved").length;
const rejectedCount = requests.filter(r => r.status === "rejected").length;

const data=[
    {
        title:"All Requests",
        number:allCount,
        icon:<Layers3 className="h-6 w-6 text-blue-600" />,
        message:"Total requests received",
        background:" bg-blue-100",
        text:"text-blue-600"
    },
    {
        title:"Pending",
        number:pendingCount,
        icon:<Clock3 className="h-6 w-6 text-yellow-600" />,
        message:"Awaiting Review",
        background:"bg-yellow-100",
        text:"text-yellow-600"
    },
    {
        title:"Approved",
        number:approvedCount,
        icon:<CircleCheck className="h-6 w-6 text-green-600" />,
        message:"Successfully approved",
        background:"bg-green-100",
        text:"text-green-600"
    },
    {
        title:"Rejected",
        number:rejectedCount,
        icon:<CircleX className="h-6 w-6 text-red-600" />,
        message:"Rejected",
        background:"bg-red-100",
        text:"text-red-600"
    },
]

const filteredRequests = requests.filter((req) =>
  activeTab === "all" ? true : req.status === activeTab
);

  return (
    <PageShell>
      <div className="flex min-h-[calc(100vh-64px)]">
        
        

        {/* Right Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">
            Requests Overview
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage and review demo requests.
          </p>

          <div className="mt-3 p-6">
           <div className="grid gap-6 md:grid-cols-4">            
             {data.map((item, index) => (
                <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-4">
                <div className={`rounded-xl ${item.background} p-3`}>
                    {item.icon}
                </div>

                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                    {item.title}
                    </p>

                    <h2 className="text-4xl font-bold mt-1">
                    {item.number}
                    </h2>

                    <p className={`mt-2 text-xs ${item.text}`}>
                    {item.message}
                    </p>
                </div>
                </div>
            </div>

                      ))}

           </div>
          </div>

          <div className="">
            <div className="flex gap-2 border-b border-border">
                 {tabs.map((tab) => (
                    <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 text-sm font-medium transition ${
                        activeTab === tab.key
                        ? "border-b-2 border-cyan-500 text-cyan-500"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>
          </div>
        <div className="mt-5 max-h-[500px] overflow-y-auto space-y-5 pr-2 ">
          {filteredRequests.map((request) => (
  <div
    key={request._id}
    className="mt-5 rounded-xl border border-border bg-card p-6"
  >
    <div className="flex items-start justify-between gap-6">

      {/* Left Section */}
      <div className="flex flex-1 items-start gap-5">

        {/* Initials Avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
          {getInitials(`${request.firstName} ${request.lastName}`)}
        </div>

        {/* User Details */}
        <div className="min-w-[250px]">
          <h3 className="text-lg font-semibold">
            {request.firstName} {request.lastName}
          </h3>

          <p className="text-sm text-muted-foreground">
            {request.companyEmail}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            +91 {request.phoneNumber}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">

            <div className="flex items-center gap-1">
              <UserRound className="h-4 w-4" />
              {request.role}
            </div>

            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {request.location}
            </div>

          </div>
        </div>

        {/* Company + Message */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            {request.companyName}
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            {request.companyEmail}
          </div>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {request.message}
          </p>
        </div>

      </div>

      {/* Status + Actions */}
      <div className="flex flex-col items-end gap-4">

        <span
          className={`rounded-full px-4 py-1 text-xs font-semibold
            ${
              request.status === "approved"
                ? "bg-green-100 text-green-700"
                : request.status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {request.status.toUpperCase()}
        </span>

        <p className="text-right text-xs text-muted-foreground">
          Requested on <br />
          {new Date(request.createdAt).toLocaleString()}
        </p>
        {request.status === "approved" && request.approvedAt && (
        <p className="text-xs text-green-600">
            Approved on <br />
            {new Date(request.approvedAt).toLocaleString()}
        </p>
        )}

        {request.status === "rejected" && request.rejectedAt && (
        <p className="text-xs text-red-600">
            Rejected on <br />
            {new Date(request.rejectedAt).toLocaleString()}
        </p>
        )}
        {request.status === "pending" && (
          <div className="flex gap-3">

            <button
              onClick={() => handleApprove(request._id)}
              className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50"
            >
              ✓ Approve
            </button>

            <button
              onClick={() => handleReject(request._id)}
              className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              ✕ Reject
            </button>

          </div>
        )}

      </div>

    </div>
  </div>
))}
</div>
        </main>
      </div>
    </PageShell>
  );
}