//
//  ContactUsViewController.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 22/01/22.
//

import UIKit
import React
import SwiftUI

class ContactUsViewController: UIViewController,  RCTBridgeDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .cyan
        
        guard let bridge = RCTBridge(delegate: self, launchOptions: nil) else { return }
        let rootView = RCTRootView(bridge: bridge, moduleName: "ContactUs", initialProperties: nil)
        rootView.frame = UIScreen.main.bounds
        //self.view = rootView
        self.view.addSubview(rootView)
    }
    
    func sourceURL(for bridge: RCTBridge!) -> URL! {
       
      return  URL(string: "/Users/ajaygirolkar/Desktop/ReactNative/RNDemoProject/CustomComponents/ContactUs.js")
    }
}
