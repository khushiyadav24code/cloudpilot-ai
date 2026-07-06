export type AnalysisResult = {
  appType: string;
  services: string[];
  cost: string;
  securityScore: string;
  terraformFiles: string;
  securityChecks: string[];
  terraformCode: string;
};

export function analyzePrompt(prompt: string): AnalysisResult {
  const text = prompt.toLowerCase();

  if (text.includes("bank") || text.includes("payment") || text.includes("secure")) {
    return {
      appType: "Secure Financial Application",
      services: ["VPC", "Private Subnets", "RDS PostgreSQL", "WAF", "IAM", "CloudWatch"],
      cost: "$250/mo",
      securityScore: "94/100",
      terraformFiles: "12",
      securityChecks: [
        "Database placed in private subnet",
        "Encryption enabled",
        "WAF recommended",
        "IAM least privilege required",
      ],
      terraformCode: `resource "aws_db_instance" "secure_db" {
  engine              = "postgres"
  storage_encrypted   = true
  publicly_accessible = false
}`,
    };
  }

  if (text.includes("ai") || text.includes("gpu") || text.includes("chatbot")) {
    return {
      appType: "AI / ML Application",
      services: ["GPU EC2", "Docker", "Redis", "PostgreSQL", "Load Balancer"],
      cost: "$420/mo",
      securityScore: "82/100",
      terraformFiles: "10",
      securityChecks: [
        "GPU instance cost is high",
        "Redis should be private",
        "API rate limiting recommended",
        "Docker image scanning required",
      ],
      terraformCode: `resource "aws_instance" "gpu_app" {
  instance_type = "g4dn.xlarge"
  ami           = "deep-learning-ami"
}`,
    };
  }

  if (text.includes("portfolio") || text.includes("static")) {
    return {
      appType: "Static Website",
      services: ["S3", "CloudFront", "Route53", "ACM SSL"],
      cost: "$15/mo",
      securityScore: "90/100",
      terraformFiles: "5",
      securityChecks: [
        "HTTPS enabled",
        "S3 public access blocked",
        "CloudFront CDN enabled",
      ],
      terraformCode: `resource "aws_s3_bucket" "site" {
  bucket = "cloudpilot-portfolio"
}`,
    };
  }

  return {
    appType: "Scalable Web Application",
    services: ["VPC", "EC2 Auto Scaling", "RDS", "Load Balancer", "CloudWatch"],
    cost: "$120/mo",
    securityScore: "86/100",
    terraformFiles: "7",
    securityChecks: [
      "Database is private",
      "Backups enabled",
      "SSL termination required",
      "IAM permissions need review",
    ],
    terraformCode: `resource "aws_instance" "app" {
  ami           = "ubuntu-lts"
  instance_type = "t3.medium"
}`,
  };
}