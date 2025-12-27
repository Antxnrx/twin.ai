┌────────────────────────────────────────────┐
│               Client (Web/App)             │
│  - Login                                   │
│  - Single Conversation UI                  │
│  - File Attachments                        │
│  - Settings / Memory Controls              │
└───────────────────────┬────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────┐
│               API Gateway                  │
│  - Auth                                    │
│  - Rate limiting                           │
│  - Request validation                      │
└───────────────────────┬────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────┐
│            Conversation Orchestrator       │
│  - Message routing                         │
│  - Mode control (learn/freeze/simulate)    │
│  - Context assembly                        │
└──────────────┬──────────────┬──────────────┘
               │              │
               ▼              ▼
┌─────────────────────┐  ┌─────────────────────┐
│     Memory Engine   │  │   Document Engine   │
│  (Identity Core)    │  │  (File Ingestion)   │
└───────────┬─────────┘  └───────────┬─────────┘
            │                        │
            ▼                        ▼
┌────────────────────────────────────────────┐
│              Context Builder               │
│  - Memory retrieval                        │
│  - Conflict resolution                     │
│  - Weighting & decay                       │
└───────────────────────┬────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────┐
│                 LLM Layer                  │
│  (GPT / Claude / Hybrid)                   │
└───────────────────────┬────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────┐
│            Response Post-Processor         │
│  - Tone alignment                          │
│  - Safety checks                           │
│  - Explainability hooks                    │
└───────────────────────┬────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────┐
│             Memory Write Controller        │
│  - Decide what gets stored                 │
│  - Update identity safely                  │
└────────────────────────────────────────────┘
