package com.tns.gen.com.facebook.imagepipeline.animated.base;

public class AnimatedDrawable_frnal_ts_helpers_l58_c38__AnimatedImage extends com.facebook.imagepipeline.animated.base.AnimatedDrawable implements com.tns.NativeScriptHashCodeProvider {
	public AnimatedDrawable_frnal_ts_helpers_l58_c38__AnimatedImage(java.util.concurrent.ScheduledExecutorService param_0, com.facebook.imagepipeline.animated.base.AnimatedDrawableCachingBackend param_1, com.facebook.imagepipeline.animated.base.AnimatedDrawableDiagnostics param_2, com.facebook.common.time.MonotonicClock param_3){
		super(param_0, param_1, param_2, param_3);
		com.tns.Runtime.initInstance(this);
	}

	public void start()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "start", void.class, args);
	}

	public void stop()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "stop", void.class, args);
	}

	public boolean isRunning()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "isRunning", boolean.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
