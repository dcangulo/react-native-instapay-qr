//
//  InstaPayQrManager.swift
//  instapayqr
//
//  Created by David Angulo on 2/5/22.
//

import Foundation

@objc(InstaPayQrManager)
class InstaPayQrManager : RCTViewManager {
  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    return InstaPayQr()
  }
}
