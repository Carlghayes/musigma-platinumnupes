variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"  # Updated to match your RDS region
}

data "aws_availability_zones" "available" {
  state = "available"
}