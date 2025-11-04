@description('The base name for all resources')
param baseName string = 'conradannan'

@description('The location for all resources')
param location string = resourceGroup().location

@description('The tags to apply to all resources')
param tags object = resourceGroup().tags

// Container Registry Module
module containerRegistry 'br:aspdcorebicep.azurecr.io/containers/container-registry:1.1-stable' = {
  name: 'containerRegistry'
  params: {
    containerRegistryName: '${baseName}acr'
    location: location
    tags: tags
    adminUserEnabled: false
    replicationLocations: ['westeurope']
    roleAssignments: []
  }
}

// Storage Account Module
module storageAccount 'br:aspdcorebicep.azurecr.io/storage-account/storage-account:1.1-stable' = {
  name: 'storageAccount'
  params: {
    storageAccountName: '${baseName}st'
    location: location
    tags: tags
    kind: 'StorageV2'
    skuName: 'Standard_LRS'
    accessTier: 'Hot'
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    blobContainerNames: ['data', 'logs']
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
      ipRules: []
      virtualNetworkRules: []
    }
    roleAssignments: []
  }
}

// Outputs
output containerRegistryId string = containerRegistry.outputs.containerRegistryId
output storageAccountId string = storageAccount.outputs.storageAccountId