initSidebarItems({"fn":[["call_with_output","Call a callback that returns a `T` while:"],["call_with_result","Call a callback that returns a `Result<T, E>` while:"],["destroy_c_string","Free the memory of a string created by [`rust_string_to_c`] on the rust heap. If `c_string` is null, this is a no-op."],["opt_rust_str_from_c","Same as `rust_string_from_c`, but returns None if `c_string` is null instead of asserting."],["opt_rust_string_from_c","Same as `rust_string_from_c`, but returns None if `c_string` is null instead of asserting."],["opt_rust_string_to_c","Variant of [`rust_string_to_c`] which takes an Option, and returns null for None."],["rust_str_from_c","Convert a null-terminated C string to a rust `str`. This does not take ownership of the string, and you should be careful about the lifetime of the resulting string. Note that strings containing invalid UTF-8 are replaced with the empty string (for many cases, you will want to use [`rust_string_from_c`] instead, which will do a lossy conversion)."],["rust_string_from_c","Convert a null-terminated C into an owned rust string, replacing invalid UTF-8 with the unicode replacement character."],["rust_string_to_c","Convert a rust string into a NUL-terminated utf-8 string suitable for passing to C, or to things ABI-compatible with C."]],"macro":[["define_box_destructor","Define a (public) destructor for a type that was allocated by `Box::into_raw(Box::new(value))` (e.g. a pointer which is probably opaque)."],["define_bytebuffer_destructor","Define a (public) destructor for the ByteBuffer type."],["define_handle_map_deleter","Define a (public) destructor for a type that lives inside a lazy_static [`ConcurrentHandleMap`]."],["define_string_destructor","For a number of reasons (name collisions are a big one, but, it also wouldn't work on all platforms), we cannot export `extern \"C\"` functions from this library. However, it's pretty common to want to free strings allocated by rust, so many libraries will need this, so we provide it as a macro."],["implement_into_ffi_by_delegation","Implement IntoFfi for a type by converting through another type."],["implement_into_ffi_by_json","Implements [`IntoFfi`] for the provided types (more than one may be passed in) by converting to the type to a JSON string."],["implement_into_ffi_by_pointer","Implements [`IntoFfi`] for the provided types (more than one may be passed in) by allocating `$T` on the heap as an opaque pointer."],["implement_into_ffi_by_protobuf","Implements [`IntoFfi`] for the provided types (more than one may be passed in) implementing `prost::Message` (protobuf auto-generated type) by converting to the type to a [`ByteBuffer`]. This [`ByteBuffer`] should later be passed by value."],["static_assert","Force a compile error if the condition is not met. Requires a unique name for the assertion for... reasons. This is included mainly because it's a common desire for FFI code, but not for other sorts of code."]],"mod":[["abort_on_panic","This module exists just to expose a variant of [`call_with_result`] and [`call_with_output`] that aborts, instead of unwinding, on panic."],["handle_map","This module provides a [`Handle`] type, which you can think of something like a dynamically checked, type erased reference/pointer type. Depending on the usage pattern a handle can behave as either a borrowed reference, or an owned pointer."]],"struct":[["ByteBuffer","ByteBuffer is a struct that represents an array of bytes to be sent over the FFI boundaries. There are several cases when you might want to use this, but the primary one for us is for returning protobuf-encoded data to Swift and Java. The type is currently rather limited (implementing almost no functionality), however in the future it may be more expanded."],["ErrorCode","A wrapper around error codes, which is represented identically to an i32 on the other side of the FFI. Essentially exists to check that we don't accidentally reuse success/panic codes for other things."],["ExternError","Represents an error that occured within rust, storing both an error code, and additional data that may be used by the caller."],["FfiStr","`FfiStr<'a>` is a safe (`#[repr(transparent)]`) wrapper around a nul-terminated `*const c_char` (e.g. a C string). Conceptually, it is similar to [`std::ffi::CStr`], except that it may be used in the signatures of extern \"C\" functions."]],"trait":[["IntoFfi","This trait is used to return types over the FFI. It essentially is a mapping between a type and version of that type we can pass back to C (`IntoFfi::Value`)."]]});