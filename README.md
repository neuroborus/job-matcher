# Entity Matching Workflow Documentation

This document describes the workflow for comparing a resume (CV) with a job description using Named Entity Recognition (NER), normalization, and similarity metrics.

---

## Overview of the Workflow

The pipeline consists of the following steps:

1. **LLM NER**: Extract named entities from both the resume and job description.
2. **Named Entity Normalization**: Normalize the extracted entities (e.g., combine subtokens and standardize case).
3. **Set Similarity Metric**: Compare the normalized entities using a weighted Jaccard similarity metric.
