-- CreateTable
CREATE TABLE "Opportunity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "buyer" TEXT,
    "source" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publishedAt" DATETIME,
    "closeAt" DATETIME,
    "summary" TEXT,
    "tags" TEXT NOT NULL DEFAULT '[]',
    "matchScore" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SourceRun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "source" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" DATETIME,
    "itemCount" INTEGER NOT NULL DEFAULT 0,
    "errorCount" INTEGER NOT NULL DEFAULT 0,
    "errors" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Opportunity_status_idx" ON "Opportunity"("status");

-- CreateIndex
CREATE INDEX "Opportunity_matchScore_idx" ON "Opportunity"("matchScore");

-- CreateIndex
CREATE INDEX "Opportunity_createdAt_idx" ON "Opportunity"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_source_url_key" ON "Opportunity"("source", "url");

-- CreateIndex
CREATE INDEX "SourceRun_source_idx" ON "SourceRun"("source");

-- CreateIndex
CREATE INDEX "SourceRun_startedAt_idx" ON "SourceRun"("startedAt");
