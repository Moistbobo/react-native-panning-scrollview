//
//  RNPanningScrollViewModule.swift
//  RNPanningScrollViewModule
//
//  Copyright © 2021 Moistbobo. All rights reserved.
//

import Foundation

@objc(RNPanningScrollViewModule)
class RNPanningScrollViewModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
