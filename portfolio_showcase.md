# JobSniper Portfolio Showcase

**AI-Powered Job Aggregation Platform | 8-Day Build**

---

## 🎯 The Achievement

Built **production-grade full-stack platform** in **8 days** by orchestrating **AI agents** as specialized team members:

- **Team Lead** (Claude): Architecture, reviews, planning
- **Backend Dev** (Claude): Express APIs, MongoDB queries
- **Frontend Dev** (Claude): Next.js, React components
- **DevOps** (Claude): Deployment, migrations
- **Product Analyst** (Gemini): User flows, edge cases
- **Architect** (Gemini): System design, data models
- **QA** (Claude): Validation, security reviews

---

## 📦 What I Built

### **Problem Solved**

Job seekers waste hours browsing Telegram channels, manually filtering jobs, tailoring resumes.

### **Solution Delivered**

Centralized platform that:

1. Scrapes Telegram channels in real-time
2. Parses jobs with AI into structured data
3. Filters via advanced multi-dimensional search
4. Generates AI-tailored resumes (PDF/DOCX)
5. Sends smart Telegram notifications

---

## 🛠️ Tech Stack

**Backend:**

- Node.js, Express, TypeScript, MongoDB Atlas
- Telegram GramJS (scraping) + Bot API (notifications)
- Gemini AI + Abacus.ai (dual provider)
- JWT auth, Joi validation, bcrypt

**Frontend:**

- Next.js 15, React 19, TypeScript, TailwindCSS 4
- React Query (server state) + Zustand (client state)
- NextAuth (Google/Yandex/Email OAuth)
- shadcn/ui, Lucide icons, Framer Motion

**Integrations:**

- **Telegram:** Real-time scraping + bot notifications
- **AI:** Job parsing + resume tailoring
- **MongoDB:** Optimized schemas with indexes
- **NextAuth:** Multi-provider authentication

---

## 🏗️ Architecture Highlights

### **3-Layer Backend**

```
Controller (HTTP) → Service (Logic) → Repository (Data)
```

- 11 modules (job/channel/scraper/sniper/notification/telegram/user/bundle/feedback/resume/stats)
- 13 service layers
- 30+ API endpoints
- Path aliases (`@modules`, `@config`, `@utils`)

### **Modern Frontend**

- Server/client component split (Next.js App Router)
- 50+ atomic components
- Infinite scroll with intersection observer
- React Query caching (5-min stale time)

---

## 🚀 Key Features

### **1. Advanced Job Filtering**

- Multi-dimensional: tech stack, level, location, experience, job function
- Real-time autocomplete with fuzzy search
- Persistent state (Zustand store)

### **2. AI Resume Tailoring**

- Upload base resume → AI customizes per job
- Generates PDF + DOCX + cover letter + Telegram message
- Service composition: `sniper → ai-tailor → pdf/docx generators`

### **3. Smart Notifications**

- Custom filters per user
- Quiet hours (timezone-aware)
- Deduplication
- Telegram bot with inline keyboards

### **4. Channel Onboarding**

- Curated bundles ("Tech Starter Pack", "Senior Roles")
- 6 swaps/month for free tier
- 5-channel limit (free) vs unlimited (premium)

### **5. Real-Time Scraping**

- GramJS listener for new messages
- External page scraping (cheerio + AI)
- Auto-cleanup (jobs >7 days)

---

## 📈 Metrics

| **Metric**            | **Value**              |
| --------------------- | ---------------------- |
| Development Time      | 8 days                 |
| LOC (Estimated)       | ~15,000+               |
| Backend Modules       | 11                     |
| Service Layers        | 13                     |
| API Endpoints         | 30+                    |
| Frontend Components   | 50+                    |
| README Documentation  | 1,543 lines            |
| AI Models Used        | 2 (Gemini, Abacus)     |
| External Integrations | 4 (Telegram x2, AI x2) |

---

## 🧠 Development Methodology

### **Strategic AI Delegation**

**Instead of:**

> "AI, write this file"

**I did:**

> "Claude (Team Lead): Design 3-layer architecture with path aliases"
> "Gemini (Product): Analyze user flow for channel onboarding"
> "Claude (Backend): Implement job filtering with MongoDB compound indexes"
> "Claude (QA): Review security—validate input, sanitize errors"

### **Iterative Refinement**

Never accepted first outputs. Reviewed every AI-generated piece:

- "Optimize this MongoDB query"
- "Add validation for this edge case"
- "Refactor into smaller functions"

**Result:** 50+ Claude iterations, 10+ Gemini planning docs

### **Quality Standards Enforced**

- TypeScript strict mode (no `any`)
- ESLint + Prettier with pre-commit hooks
- Custom error classes
- Comprehensive README (808 lines backend, 735 lines frontend)

---

## 🔐 Security Implemented

✅ JWT authentication (HTTP-only cookies)
✅ Input validation (Joi schemas on all endpoints)
✅ Password hashing (bcrypt)
✅ File type validation (PDF/DOCX only)
✅ CORS whitelist
✅ Environment secrets (never committed)
✅ Error sanitization (hide stacks in production)

---

## 🎓 Skills Demonstrated

### **Technical**

- Full-stack (Node.js + Next.js)
- TypeScript mastery (strict types, interfaces)
- Database optimization (indexes, TTL, projection)
- RESTful API design
- Multi-provider OAuth
- AI integration (prompt engineering, fallback)
- Real-time systems (webhooks, message listeners)
- State management (React Query + Zustand)

### **Soft**

- Project planning (11-module breakdown)
- AI orchestration (7 specialized roles)
- Code quality (clean architecture)
- Product thinking (onboarding, monetization limits)
- Time management (production in 8 days)

---

## 💡 Key Learnings

### **AI as Force Multiplier**

AI accelerates implementation, but YOU must:

- Define clear requirements
- Review for logic/security
- Test edge cases
- Maintain architecture consistency

### **Prompt Engineering = Project Management**

Good prompts = good outcomes:

- Provide full context (errors, existing code, env)
- Ask for options, compare tradeoffs
- Request explanations, not just code
- Iterate based on feedback

### **AI Excels at Boilerplate, I Excel at Architecture**

- **AI:** CRUD, API routes, type definitions
- **Me:** System design, user flows, integrations

---

## 🏆 Why This Matters

### **Speed with Quality**

8 days vs typical 3-4 weeks **without sacrificing:**

- Architecture (3-layer separation)
- Documentation (1,543 lines)
- Features (filtering, AI, notifications, onboarding)
- Security (validation, auth, sanitization)

### **Production-Ready**

Not an MVP:

- Database migrations
- Environment config
- Error handling middleware
- Graceful reconnection
- Cleanup jobs

---

## 🔗 Links

- **Frontend:** `[Vercel URL]`
- **Backend:** `[Render/Railway URL]`
- **GitHub:** `[Repository]`
- **Demo Video:** `[Loom/YouTube]`

---

## 📝 Documentation References

- Backend README: [telegram-jobs-server/README.md](file:///Users/werty.potom/Desktop/untitled%20folder/telegram-jobs-server/README.md) (808 lines)
- Frontend README: [telegram-jobs-client/README.md](file:///Users/werty.potom/Desktop/untitled%20folder/telegram-jobs-client/README.md) (735 lines)
- Exceptional Performance Answer: [exceptional_performance_answer.md](file:///Users/werty.potom/.gemini/antigravity/brain/e1e3b52b-fd3d-450a-8226-3c804d4252b3/exceptional_performance_answer.md)
- Technical Deep-Dive: [technical_deep_dive.md](file:///Users/werty.potom/.gemini/antigravity/brain/e1e3b52b-fd3d-450a-8226-3c804d4252b3/technical_deep_dive.md)

---

**Bottom Line:**

I'm not just a dev who uses AI. I'm someone who **orchestrates AI strategically** to ship **production-grade work at exceptional speed**.
