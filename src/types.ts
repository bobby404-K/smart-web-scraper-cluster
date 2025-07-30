export interface ScrapeJob {
  id: string;
  url: string;
  selector: string;
  retries: number;
  proxy?: string;
}

export interface ScrapeResult {
  jobId: string;
  statusCode: number;
  content: string;
  latencyMs: number;
}
