//
//  InstaPayQRManager.swift
//  instapayqr
//
//  Created by David Angulo on 2/5/22.
//

import Foundation

@objc(InstaPayQRManager)
class InstaPayQRManager : RCTViewManager {
  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    return InstaPayQR()
  }
}
