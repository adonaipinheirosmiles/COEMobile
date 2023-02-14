//
//  CardManager.swift
//  COEMobile
//
//  Created by Adonai Junio Pinheiro on 09/02/23.
//

import Foundation
import SwiftRandom

@objc(CardManager)
class CardManager: NSObject {

  private var name = Randoms.randomFakeName();

  @objc
  func getCardInfo(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    if (name == "") {
      let error = NSError(domain: "", code: 404, userInfo: nil)
      reject("E_NAME", "name cannot be empty", error)
    } else {
      resolve([
        "cardName": name,
        "cardNumber": "\(Int.random(in: 1000..<9999)) \(Int.random(in: 1000..<9999)) \(Int.random(in: 1000..<9999)) \(Int.random(in: 1000..<9999))",
        "cardDueDate": "\(Int.random(in: 1..<31))/\(Int.random(in: 1..<12))"
      ])
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
