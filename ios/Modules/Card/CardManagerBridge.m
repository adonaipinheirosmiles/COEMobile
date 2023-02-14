//
//  CardManagerBridge.m
//  COEMobile
//
//  Created by Adonai Junio Pinheiro on 09/02/23.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CardManager, NSObject)

RCT_EXTERN_METHOD(
  getCardInfo: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)

@end
