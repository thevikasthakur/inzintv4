# ZoeyMed: How Inzint Built an IVF HMIS Around the Couple's Treatment Journey

ZoeyMed is an IVF health management information system (HMIS). The important word is not only “health” or “management”. It is “IVF”. Fertility care cannot be modelled as a conventional hospital record with one patient, one chart and a series of appointments.

The shared treatment journey may involve two intended parents, each with a distinct medical record. Depending on the treatment and the clinic's jurisdiction, a sperm, egg or embryo donor may also enter the process. Consultations, investigations, consents, medication, laboratory work, gametes, embryos and outcomes have to remain connected without collapsing several people into one record or revealing information to the wrong person.

That relationship model is the heart of an IVF HMIS, also described in the market as an IVF HIMS or HMS. Inzint built ZoeyMed to bring the clinic's connected workflows into one web platform. From August to December 2025, our team designed and built the product across the user experience, application architecture, backend, frontend, data layer and testing.

> **The central design decision:** the couple's treatment cycle is shared context, not a shortcut that turns one partner into a field inside the other's medical record.

| Project fact | Detail |
|---|---|
| **Product** | ZoeyMed, an IVF HMIS and clinic management platform |
| **Industry** | Fertility care and clinic operations |
| **Delivery window** | August–December 2025 |
| **Inzint scope** | Product UX, system architecture, full-stack development and testing |
| **Core stack** | React, Redux, Node.js, Fastify, MongoDB and AWS |
| **Operational areas** | Appointments, patient records, treatment protocols, laboratory workflows and inventory |

![Architecture of the ZoeyMed clinic management platform, from clinic roles through the React interface and Fastify API to workflow modules, MongoDB and AWS infrastructure](/assets/images/case-studies/zoeymed/zoeymed-architecture.svg)

## Why IVF needs a relationship-first HMIS

Most general-purpose hospital systems are organised around an individual patient. That remains essential in fertility care: each person needs a distinct identity, clinical history, investigation record, access boundary and consent trail. But the clinic also needs a shared view of the treatment journey connecting those people.

An IVF HMIS therefore has to model several kinds of relationship at the same time:

- **Linked people, separate records.** Two intended parents can participate in one treatment cycle while retaining individual medical histories, appointments, test results and permissions. A donor, where applicable, is another distinct person with a deliberately controlled relationship to the cycle.
- **The cycle as the operational spine.** Consultations, stimulation protocols, medication, scans, procedures, laboratory events and outcomes need to refer to the same treatment context even when they belong to different people or departments.
- **Gametes and embryos as traceable clinical entities.** Eggs, sperm and embryos move through collection, processing, storage, use and sometimes disposal. Their identity and status cannot live as free-text notes attached to an appointment.
- **Consent that belongs to the right person and action.** Consent can differ by person, material and purpose. A system needs to preserve who agreed to what, when they agreed and whether that decision changed, while enforcing the clinic's jurisdiction-specific rules.
- **Privacy boundaries inside a shared journey.** A clinician may need relevant context from both partners, while another role may need only scheduling, laboratory or inventory information. Linking records must not mean making every detail visible to everyone.
- **Time-critical coordination.** Medication timing, scans, retrieval, fertilisation, culture and transfer create dependencies across calendars, records, laboratory work and stock. A change in one part of the cycle can create tasks elsewhere.

This is why adding an “IVF” label to a generic HMS is not enough. The underlying data model must express a network of people, cycles, biological material, consents and clinical events. Regulatory details vary by country, but the structural need is visible in official fertility guidance: the [UK Human Fertilisation and Embryology Authority](https://www.hfea.gov.uk/choose-a-fertility-clinic/how-we-manage-your-information/) describes information held about patients, partners and donors, while [European tissue and cell rules](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004L0023) illustrate the requirement for traceability between donor, material and recipient.

ZoeyMed's documented release connected appointments, patient records, treatment protocols, laboratory workflows and inventory around shared treatment context. This case study does not claim that every possible donor pathway or every jurisdiction's regulatory workflow was included. It shows the architectural foundation required to support specialised fertility operations without forcing them into a one-patient-at-a-time model.

## The problem was fragmentation, not a missing feature

The clinic's starting point was a mixture of paper, spreadsheets and separate tools. Schedules, patient information, laboratory activity and inventory were handled in different places. That created duplicate entry and made a connected clinical process look like a collection of independent administrative tasks.

An IVF cycle does not stay inside one department or one person's chart. A scheduling decision can affect a treatment stage. A protocol can generate medication and laboratory tasks. A laboratory event belongs to a treatment context and may depend on precise timing. Materials used in that process affect inventory. A useful platform therefore had to preserve the relationships between people and activities, not simply reproduce the old forms on a screen.

Success meant giving the front desk, clinical team and laboratory staff a shared operational system while retaining the knowledge embedded in the clinic's existing process.

## Inzint's responsibility covered the product as a system

Inzint's scope included product and interface design, system architecture, the React application, the Node.js and Fastify backend, the MongoDB data layer, testing and AWS deployment.

That end-to-end remit mattered. The difficult decisions sat between disciplines: how a clinical concept should appear in the interface, how its state should move through an API, how it should be represented in the database and how another module should safely refer to it later.

The source record does not identify a separate mobile application, diagnostic AI, patient-facing portal or billing product as part of this delivery. This case study does not claim those features. ZoeyMed's documented scope was the operational platform connecting appointments, records, protocols, lab work and inventory.

## Domain complexity lives in sequences and dependencies

A conventional booking product can treat an appointment as a time, a person and a status. Fertility care adds a larger chain of context. Treatment cycles contain phases. Medication can involve several stages. Laboratory processes have their own timings and records. Different staff roles need different views of the same underlying journey.

This creates three modelling problems.

First, the platform needs stable individual records linked through the appropriate treatment context, without flattening people and clinical activity into one oversized form. Second, it needs to represent a process that changes over time while keeping earlier information intelligible. Third, it needs modules to coordinate without making one workflow inseparable from every other workflow.

That is why the architecture was organised around a shared data model and modular service boundaries rather than a single undifferentiated clinic screen.

## The architecture: one platform, explicit boundaries

ZoeyMed used a React single-page application with Redux for client-side state. The interface communicated through REST APIs exposed by a Node.js backend built with Fastify. Backend responsibilities were divided into service areas for scheduling, patient records, laboratory work and inventory, with MongoDB holding the connected operational data. AWS provided the deployment environment and object storage described in the delivery record.

The result was a clear flow:

```text
Front desk | clinicians | laboratory staff
                     |
             React application
               Redux state
                     |
               Fastify REST API
          ___________|____________
         |            |            |
  Scheduling     Patient and    Inventory
  and cycles     lab workflows   management
         |____________|____________|
                     |
                  MongoDB
                     |
          AWS hosting and storage
```

This is not a claim that every clinical concern became an independent microservice. The source material describes modular service layers within the application. That distinction is important: modularity can improve change safety without introducing the operational overhead of a distributed system.

## Decision one: model the workflow before optimising the screen

The first engineering decision was conceptual. The platform needed to represent how the clinic actually worked before the team could decide how many pages, forms or dashboard widgets it needed.

Working with clinic specialists exposed the treatment stages, laboratory timings and multi-step medication protocols that a generic requirements list would miss. Those conversations turned domain knowledge into explicit product concepts and relationships.

The practical consequence was a unified model in which appointments, results, medications and laboratory activity could refer to the appropriate person and shared treatment context. Staff could move through their part of the process without recreating information that another part of the clinic had already captured.

The trade-off is that domain modelling takes time before visible features accelerate. For specialised operational software, that work is not a delay. It is how the team avoids producing a faster version of the wrong workflow.

## Decision two: use modular application services, not isolated mini-products

Scheduling, records, laboratory management and inventory have different rules, but the clinic experiences them as one operation. ZoeyMed separated these concerns in the backend service layer while exposing them through one API and one product experience.

That boundary gives each area a place for its own rules. It also keeps cross-workflow relationships explicit. An inventory update does not need to contain the whole patient record, and a patient screen does not need to implement laboratory logic. They coordinate through defined application contracts.

The alternative at either extreme would have carried risk. One monolithic block of workflow logic becomes difficult to change safely. Completely separate products recreate the fragmentation the project was meant to remove. The documented architecture occupied the useful middle: one platform with internal boundaries.

## Decision three: keep multi-step context in the interface

React and Redux were used to build a responsive single-page experience. That choice was especially relevant for workflows such as a multi-stage protocol, where a user should be able to move through related steps without losing context during every transition.

Redux provided an explicit place for client-side state as users navigated the product and as data synchronised with the backend. The important outcome was not Redux itself; it was a deliberate state model for a process that could not safely depend on a loose collection of page-local values.

This architecture also creates a testing obligation. Shared client state can make a workflow coherent, but only if transitions, incomplete inputs and returned API data are exercised systematically. The delivery therefore paired the interface work with automated tests that simulated clinic flows, including scheduling a cycle and checking laboratory results.

## Decision four: choose a data model that could express varied records

The project used MongoDB for patient and treatment data. The delivery record identifies schema flexibility as the reason: different records and stages do not all carry the same shape of information.

Flexibility is not the same as having no structure. A clinic platform still needs stable identifiers, required fields, validation and predictable relationships. The engineering task is to decide which parts of a record are common and which parts legitimately vary, then enforce those decisions in application code and API contracts.

The team also planned for existing information. Available digital records could be imported through migration scripts and mappings, while the wider starting state included paper processes that could not be treated as a clean database export. The evidence does not provide a record count, so this case study makes no claim about migration volume or completeness beyond the documented import approach.

## Security was an application concern, not a badge

ZoeyMed handled sensitive health and operational data. The documented controls included role-based access and encryption in transit and at rest. Those controls fit the architecture: access decisions belong at the application boundary, while transport and storage protections cover data as it moves and rests.

The research also mentions HIPAA and GDPR as constraints. It does not provide an audit, certification, jurisdictional assessment or legal sign-off. For that reason, this page does not describe ZoeyMed as certified or independently verified as compliant with either regime.

This distinction matters in healthcare engineering. Building relevant technical controls is part of compliance work; it is not, by itself, proof of legal compliance.

## Testing followed real clinic journeys

The automated test suite simulated representative use of the platform rather than checking isolated components alone. The examples recorded for the project include scheduling an IVF cycle and checking laboratory results.

Those paths are valuable because they cross the seams of the system: interface state, API validation, domain rules and stored records. A successful unit test can show that one function works. A workflow test can show that the system still carries the right context from one operational step to the next.

The team used staging and an automated delivery pipeline during implementation. The source does not provide the underlying build history, deployment logs or uptime measurements, so this case study does not publish a release-frequency or zero-downtime claim.

## What was delivered

At the end of the five-month engagement, ZoeyMed brought the documented clinic workflows into one web platform:

- shared appointment and treatment-cycle scheduling;
- connected patient and treatment records;
- support for multi-stage protocols and medication workflows;
- laboratory process tracking;
- inventory management;
- role-aware access to the same operational system;
- a React and Redux interface backed by Fastify REST APIs;
- MongoDB persistence and AWS deployment;
- migration tooling for available digital records; and
- automated tests for representative clinic journeys.

The project record says the clinic moved away from its fragmented mix of tools and paperwork. It does not contain a consistent, independently attributable definition for the various “30%” efficiency and speed statements in the research, so no numerical improvement is published here.

## What we learned

The strongest lesson was that specialists need to be involved before a workflow becomes code. The clinic's doctors and laboratory staff helped reveal where a seemingly simple form actually represented a timed, multi-stage process.

The second lesson was to treat migration as a mapping problem, not a file-transfer task. Digital records, spreadsheets and paper do not share a convenient schema. The destination model has to be explicit before existing information can be placed into it responsibly.

The third was that interface simplification needs iteration. Early screens were too dense. Refining them with users helped the product expose the right context without showing every available field at once.

Finally, automated tests were most useful when they described work the clinic recognised. “Schedule a cycle and retrieve its laboratory information” preserves more product knowledge than “the button component rendered.”

## What ZoeyMed demonstrates about Inzint

ZoeyMed demonstrates Inzint's ability to turn a specialised operation into a coherent product architecture: discover the real workflow with domain experts, define a connected data model, draw module boundaries, carry state through a complex interface, protect sensitive information and test the journey across the whole system. It is one example of Inzint's broader [healthcare software engineering](/industries/healthcare-app-development) capability.

That capability applies beyond fertility care. Any organisation replacing paper, spreadsheets and disconnected tools faces the same fundamental challenge: the software must model the relationships in the operation, not just digitise its visible forms.
