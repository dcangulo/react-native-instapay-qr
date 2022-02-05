//
//  InstaPayQR.swift
//  instapayqr
//
//  Created by David Angulo on 2/5/22.
//

import Foundation
import AVFoundation

class InstaPayQR : UIView, AVCaptureMetadataOutputObjectsDelegate {
  override func layoutSubviews() {
    super.layoutSubviews()

    let captureSession = AVCaptureSession()
    let previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
    previewLayer.videoGravity = AVLayerVideoGravity.resizeAspectFill
    previewLayer.connection?.videoOrientation = .portrait
    previewLayer.frame = bounds

    guard let videoCaptureDevice = AVCaptureDevice.default(for: .video) else { return }
    let videoInput: AVCaptureDeviceInput
    
    do {
      videoInput = try AVCaptureDeviceInput(device: videoCaptureDevice)
    } catch {
      return
    }

    let metadataOutput = AVCaptureMetadataOutput()

    if (captureSession.canAddInput(videoInput) && captureSession.canAddOutput(metadataOutput)) {
      captureSession.addInput(videoInput)
      captureSession.addOutput(metadataOutput)

      metadataOutput.setMetadataObjectsDelegate(self, queue: DispatchQueue.main)
      metadataOutput.metadataObjectTypes = [.qr]
    } else {
      return
    }

    layer.insertSublayer(previewLayer, at: 0)
    captureSession.startRunning()
  }

  func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection) {
    guard let metadataObject = metadataObjects.first else { return }
    guard let readableObject = metadataObject as? AVMetadataMachineReadableCodeObject else { return }
    guard let stringValue = readableObject.stringValue else { return }
    
    InstaPayQREventEmitter.emitter.sendEvent(withName:"onInstaPayQrRead", body:["data": stringValue])
  }
}

