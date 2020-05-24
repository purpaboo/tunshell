
export interface ServerDirectConnectAttemptPayload {
  connectAt: number
}

export interface ServerPeerJoinedPayload {
  peerKey: string
  peerIpAddress: string
}

export interface ClientTimePayload {
  clientTime: number
}

export interface KeyAcceptedPayload {
  keyType: "client"|"host"
}