//
//  TabView.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 18/01/22.
//

import SwiftUI

struct TabViewSUI: View {
    var body: some View {
        NavigationView {
            TabView {
                NativeView()
                    .tabItem {
                        Label("Native", systemImage: "iphone")
                    }
                ReactNativeViewControllerSUI(moduleName: "RNDemoProject")
                    .tabItem {
                        Label("React Native", systemImage: "globe")
                    }
                ReactNativeViewControllerSUI(moduleName: "ContactUs")
                    .tabItem {
                        Label("Contact Us", systemImage: "phone.bubble.left.fill")
                    }
                
            }.navigationBarTitle("Hybrid Native App", displayMode: .inline)
        }.background(NavigationConfigurator { nc in
            nc.navigationBar.barTintColor = .blue
            nc.navigationBar.titleTextAttributes = [.foregroundColor : UIColor.white]
        })
    }
}

struct TabView_Previews: PreviewProvider {
    static var previews: some View {
        TabViewSUI()
    }
}
