package com.davidangulo.instapayqr;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.AutoFocusMode;
import com.budiyev.android.codescanner.CodeScanner;
import com.budiyev.android.codescanner.DecodeCallback;
import com.budiyev.android.codescanner.ScanMode;

public class InstaPayQrManager extends SimpleViewManager<CodeScannerView> {
  private CodeScanner codeScanner;

  @Override
  public String getName() {
    return "InstaPayQr";
  }

  @Override
  protected CodeScannerView createViewInstance(ThemedReactContext reactContext) {
    CodeScannerView codeScannerView = new CodeScannerView(reactContext);
    codeScanner = new CodeScanner(reactContext, codeScannerView);

    codeScannerView.setAutoFocusButtonVisible(false);
    codeScannerView.setFlashButtonVisible(false);
    codeScannerView.setFrameThickness(0);
    codeScannerView.setFrameCornersSize(0);
    codeScannerView.setMaskColor(0x00000000);

    codeScanner.setCamera(CodeScanner.CAMERA_BACK);
    codeScanner.setFormats(CodeScanner.ALL_FORMATS);
    codeScanner.setAutoFocusMode(AutoFocusMode.SAFE);
    codeScanner.setScanMode(ScanMode.CONTINUOUS);
    codeScanner.setDecodeCallback(result -> runOnUiThread(() -> {
      WritableMap map = Arguments.createMap();
      map.putString("data", result.getText());

      reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit("onInstaPayQrRead", map);
    }));

    codeScanner.startPreview();

    return codeScannerView;
  }

  @Override
  public void onDropViewInstance(CodeScannerView view) {
    codeScanner.releaseResources();
    super.onDropViewInstance(view);
  }
}
