//
//  RNDemoProjectSwiftUIApp.swift
//  RNDemoProjectSwiftUI
//
//  Created by Ajay Girolkar on 18/01/22.
//

import SwiftUI

@main
struct RNDemoProjectSwiftUIApp: App {
    let persistenceController = PersistenceController.shared
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            TabViewSUI()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
 
