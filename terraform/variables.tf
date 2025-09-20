variable "resource_group_name" {
  description = "Name of the resource group"
  default     = "react-rg"
}

variable "location" {
  description = "Azure location"
  default     = "eastus"
}

variable "admin_username" {
  description = "Admin username for the VM"
  default     = "azureuser"
}

variable "vm_size" {
  description = "Size of the Virtual Machine"
  default     = "Standard_B1s"
}

variable "ssh_public_key" {
  description = "SSH public key for VM login"
  type        = string
}