---
title: Handling immature data platforms
pubDatetime: 2022-02-19
draft: false
tags: [engineering, data]
description: How to start building a robust data platform at a early stage startup
---

A robust data platform isn't typically the top priority for a scrappy startup. And for good reason! Folks are focused on making sure the product works, and duct taping features onto it to please early customers. As long as the team has whatever data they need, who cares how it got into the system.

Inevitably, if the company is successful, the weight of messy data gets unbearable. Endless support and operational tickets start pouring in causing burnout and eating everyone's time. It's a brutal cycle of not having enough time to improve the data platform because so much bandwidth is going towards fixing bad data.

It's a great feeling to be there when the company decides to really invest in cleaning up its data processes, at least until the dread slowly consumes you. Where do you start? It's a fucking dumpster fire.

## Understand the content of what's being ingested

Getting a lay of the land is a good first step. Document what incoming data looks like. It can be tempting to pull up a Google sheet, write the columns and a short description and call it good. However, a strictly defined schema can save a ton of time down the road. Creating a JSON schema, a Protobuf definition, or some other schema that explicitly spells out what the expected type of each column is, the expected range of values, whether it's nullable or not, and any primary or foreign keys is well worth the time. Other teams should be involved as well. A product manager or a customer success manager might have a much better understanding of what some specific column means to the business or the customer than an engineer. Engineers should _not_ be guessing at what business relevant data means - I _promise_ it'll cost way more time medium term than it saves short term.

These schemas should be checked in to a version control system, and changes should need to be reviewed by the relevant stakeholders (if that's even a choice – we don't always have control over what our data sources look like). In _Database Design for Mere Mortals_, Michael Hernandez emphasizes what he calls the "interview process," which is really just gathering feedback from non-technical stakeholders:

> You will inevitably miss some piece of important information when you neglect or omit any of the interviews, and this could adversely affect the final structure of your database.

## Understand the structure of what's being ingested

Once we have the content down, we need to start looking at the structure. Barr Moses [laid out the idea](https://www.montecarlodata.com/what-is-data-observability/) of "Data Observability" perfectly. We need to know the freshness, distribution, volume, schema, and lineage of our data ingests.

In the context of data ingest, freshness is only significant compared to what we expect the freshness to be. It's not uncommon to have some data feed that's delivered weekly or monthly. But knowing the expected cadence is essential so alarms can be raised internally instead of getting frantic support tickets.

Distribution refers to the distribution of values, which I mentioned should ideally be captured in a schema. This isn't always easy or even practical, It's a very fine line to walk between validating incoming data and creating alert fatigue from too many false alarms. But, imagine your incoming data was all shifted one column over from what you expect – some basic validation on distribution could catch that before it pollutes a database downstream. Another example where this could be helpful is an account number that should always be a certain length, or should always have some number of leading 0s. Getting business stakeholders involved here would be an excellent idea, as it's not always obvious to an engineer if some value is acceptable.

Volume refers to how many rows are in a typical ingest. Depending on the system and the data, it may also be helpful to measure how many rows downstream are created, updated, and deleted by some given ingest. Outliers should raise alarms internally.

I already covered schema above, and lineage isn't always relevant on the ingest side, although it becomes very relevant after ingest when we start transforming data.

## Now, start building a platform

You may have noticed, not much code is being written at any point during this whole process. That can be frustrating, but the alternative is ingests that aren't properly validated, and yet more time spent chasing down bad data for support tickets. It's worth the effort.
