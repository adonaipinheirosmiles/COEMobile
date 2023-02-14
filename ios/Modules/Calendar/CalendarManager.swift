//
//  CalendarManager.swift
//  COEMobile
//
//  Created by Adonai Junio Pinheiro on 09/02/23.
//

import Foundation
import SwiftRandom

@objc(CalendarManager)
class CalendarManager: NSObject {

  private var name = Randoms.randomFakeName();
  
    @objc
    func increment(_ callback: RCTResponseSenderBlock) {
      callback([name])
    }

 @objc
 func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"];
 }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
