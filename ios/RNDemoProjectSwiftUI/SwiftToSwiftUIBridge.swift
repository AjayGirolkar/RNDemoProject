//
//  SwiftToSwiftUIBridge.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 18/01/22.
//

import Foundation
import SwiftUI

struct ReactNativeViewControllerSUI: UIViewControllerRepresentable {
    let moduleName: String
    typealias UIViewControllerType = ReactNativeViewController
    
    func makeUIViewController(context: Context) -> ReactNativeViewController {
        let reactNativeViewController = ReactNativeViewController(moduleName: moduleName)
        return reactNativeViewController
    }
    
    func updateUIViewController(_ uiViewController: ReactNativeViewController, context: Context) {
        
    }
}
