output "alb_dns_name" {
  value = aws_lb.main.dns_name
}

output "ecr_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "rds_endpoint" {
  description = "The connection endpoint for the RDS instance"
  value       = data.aws_db_instance.fraternity.endpoint
  sensitive   = true
}

output "rds_database_name" {
  description = "The name of the RDS database"
  value       = data.aws_db_instance.fraternity.db_name
  sensitive   = true
}

output "rds_port" {
  description = "The port the RDS instance is listening on"
  value       = data.aws_db_instance.fraternity.port
  sensitive   = true
}