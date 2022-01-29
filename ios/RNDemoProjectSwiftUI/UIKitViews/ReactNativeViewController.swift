//
//  ReactNativeViewController.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 28/01/22.
//

import SwiftUI
import React

class ReactNativeViewController: UIViewController {
    
    init(moduleName: String) {
        super.init(nibName: nil, bundle: nil)        
        let bridge = ReactNativeBridge().bridge
        view = RCTRootView(bridge: bridge,
                           moduleName: moduleName,
                           initialProperties: nil)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}


class ReactNativeBridge {
    let bridge: RCTBridge

    init() {
        bridge = RCTBridge(delegate: ReactNativeBridgeDelegate(), launchOptions: nil)
    }
}

class ReactNativeBridgeDelegate: NSObject, RCTBridgeDelegate {

    func sourceURL(for bridge: RCTBridge!) -> URL! {
        return URL(string: "http://localhost:8081/index.bundle?platform=ios")
    }
}
