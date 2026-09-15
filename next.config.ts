import type { NextConfig } from "next";
import path from "path";

const CASE_STUDIES = "/resources/tools/case-studies";
const WEB = "/services/product-development/web-development";
const MOBILE = "/services/product-development/mobile-app-development";
const CLOUD = "/services/digital-transformation/cloud-services";
const SQUADS = "/services/it-managed-services/dedicated-development-teams";
const DATA = "/services/data-services/data-engineering";
const CONSULTING = "/services/consulting/technology-consulting";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve("."),
  },
  async redirects() {
    return [
      // Recognition and press pages were removed (content could not be verified).
      { source: "/about/recognition/:path*", destination: "/about", permanent: true },
      { source: "/about/connect/press-releases", destination: "/about", permanent: true },
      { source: "/awards", destination: "/about", permanent: true },

      // The fictional content library was removed; case studies are the real insights.
      { source: "/resources/learn/:path*", destination: CASE_STUDIES, permanent: false },
      { source: "/resources/news-events/:path*", destination: CASE_STUDIES, permanent: false },
      { source: "/resources/tools/infographics", destination: CASE_STUDIES, permanent: false },
      { source: "/inzint-ai/ai-knowledge-hub/:path*", destination: CASE_STUDIES, permanent: false },
      { source: "/blog/:path*", destination: CASE_STUDIES, permanent: false },
      { source: "/portfolio", destination: CASE_STUDIES, permanent: true },

      // Service catalogue consolidated to the eleven services Inzint delivers.
      { source: "/services/consulting/digital-consulting", destination: CONSULTING, permanent: true },
      { source: "/services/product-development/web-development/frontend", destination: WEB, permanent: true },
      { source: "/services/product-development/web-development/full-stack", destination: WEB, permanent: true },
      { source: "/services/product-development/mobile-app-development/:platform", destination: MOBILE, permanent: true },
      { source: "/services/it-managed-services/staff-augmentation", destination: SQUADS, permanent: true },
      { source: "/services/it-managed-services/devops-services", destination: CLOUD, permanent: true },
      { source: "/services/digital-transformation/cloud-services/:provider", destination: CLOUD, permanent: true },
      { source: "/services/data-services/data-analytics", destination: DATA, permanent: true },
      { source: "/services/data-services/big-data", destination: DATA, permanent: true },
      { source: "/services/digital-transformation/iot-development", destination: "/services", permanent: true },
      { source: "/services/digital-transformation/blockchain-development", destination: "/services", permanent: true },
      { source: "/services/digital-transformation/ar-vr-development", destination: "/services", permanent: true },

      // Links that were published with the wrong path.
      { source: "/careers", destination: "/about/company/careers", permanent: true },
      { source: "/cookie-policy", destination: "/privacy-policy", permanent: true },
      { source: "/hire-developers/:role", destination: "/hire-developers", permanent: true },
    ];
  },
};

export default nextConfig;
