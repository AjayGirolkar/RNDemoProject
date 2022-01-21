//
//  ReactNativeViewController.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 18/01/22.
//

import UIKit
import React
import SwiftUI

class ReactNativeViewController: UIViewController, RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
      return  URL(string: "http://localhost:8081/index.bundle?platform=ios")
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .cyan
        
        guard let bridge = RCTBridge(delegate: self, launchOptions: nil) else { return }
        let rootView = RCTRootView(bridge: bridge, moduleName: "RNDemoProject", initialProperties: nil)
        rootView.frame = UIScreen.main.bounds
        //self.view = rootView
        self.view.addSubview(rootView)
    }
}
