//
//  InstaPayQrEventEmitter.swift
//  instapayqr
//
//  Created by David Angulo on 2/5/22.
//

import React

@objc(InstaPayQrEventEmitter)
class InstaPayQrEventEmitter : RCTEventEmitter {
  public static var emitter: RCTEventEmitter!

  override init() {
    super.init()
    InstaPayQrEventEmitter.emitter = self
  }

  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func supportedEvents() -> [String]! {
    return ["onInstaPayQrRead"]
  }
}
