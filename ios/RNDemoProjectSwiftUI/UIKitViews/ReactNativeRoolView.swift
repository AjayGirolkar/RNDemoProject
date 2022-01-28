//
//  ReactNativeRoolView.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 28/01/22.
//

import SwiftUI
import React

class ReactNativeViewController: UIViewController {
    
    init(moduleName: String) {
        super.init(nibName: nil, bundle: nil)
        guard let url =  URL(string: "http://localhost:8081/index.bundle?platform=ios") else { return }
        view = RCTRootView(bundleURL: url,
                           moduleName: moduleName,
                           initialProperties: nil,
                           launchOptions: nil)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
