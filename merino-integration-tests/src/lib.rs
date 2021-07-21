#![warn(missing_docs, clippy::missing_docs_in_private_items)]
// None of the tests are seen by the linter, so none of the utilities are marked
// as used. But docs don't generate for the below if they are `#[cfg(test)]`.
// This is a compromise.
#![allow(dead_code)]

//! Tests for Merino that work by reading from the external API only.
//!
//! Since the URL endpoints Merino exposes to the world are its public API, and
//! other systems depend on them, the paths used in tests here are important
//! details, and used to keep compatibility.
//!
//! This is structured as a separate crate so that it produces a single test
//! binary instead of one test per file like would happen if this were
//! `merino/tests/...`. This improves compilation and test times.
//!
//! The primary tool used by tests is [`merino_test`], which creates mock
//! servers, sets up the application for testing, and provides helpers to inspect
//! the state of the app. It then calls the test function that is passed to it,
//! providing the above tools as an argument.
//!
//! ```
//! #[actix_rt::test]
//! async fn lbheartbeat_works() {
//!     merino_test(
//!         |_| (),
//!         |TestingTools { test_client, .. }| async move {
//!             let response = test_client
//!                 .get("/__lbheartbeat__")
//!                 .send()
//!                 .await
//!                 .expect("failed to execute request");
//!
//!             assert_eq!(response.status(), StatusCode::OK);
//!             assert_eq!(response.content_length(), Some(0));
//!         },
//!     )
//!     .await
//! }
//! ```

mod caching;
mod debug;
mod dockerflow;
mod general;
mod logging;
mod suggest;
mod utils;

pub use crate::utils::{
    logging::{LogWatcher, TracingJsonEvent},
    test_tools::{merino_test, TestingTools},
};
