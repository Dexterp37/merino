(function() {var implementors = {};
implementors["merino_adm"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"merino_suggest/trait.SuggestionProvider.html\" title=\"trait merino_suggest::SuggestionProvider\">SuggestionProvider</a>&lt;'a&gt; for <a class=\"struct\" href=\"merino_adm/remote_settings/struct.RemoteSettingsSuggester.html\" title=\"struct merino_adm::remote_settings::RemoteSettingsSuggester\">RemoteSettingsSuggester</a>","synthetic":false,"types":["merino_adm::remote_settings::RemoteSettingsSuggester"]}];
implementors["merino_cache"] = [{"text":"impl&lt;'a, S&gt; <a class=\"trait\" href=\"merino_suggest/trait.SuggestionProvider.html\" title=\"trait merino_suggest::SuggestionProvider\">SuggestionProvider</a>&lt;'a&gt; for <a class=\"struct\" href=\"merino_cache/memory/struct.Suggester.html\" title=\"struct merino_cache::memory::Suggester\">Suggester</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: for&lt;'b&gt; <a class=\"trait\" href=\"merino_suggest/trait.SuggestionProvider.html\" title=\"trait merino_suggest::SuggestionProvider\">SuggestionProvider</a>&lt;'b&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["merino_cache::memory::Suggester"]},{"text":"impl&lt;'a, S&gt; <a class=\"trait\" href=\"merino_suggest/trait.SuggestionProvider.html\" title=\"trait merino_suggest::SuggestionProvider\">SuggestionProvider</a>&lt;'a&gt; for <a class=\"struct\" href=\"merino_cache/redis/struct.Suggester.html\" title=\"struct merino_cache::redis::Suggester\">Suggester</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: for&lt;'b&gt; <a class=\"trait\" href=\"merino_suggest/trait.SuggestionProvider.html\" title=\"trait merino_suggest::SuggestionProvider\">SuggestionProvider</a>&lt;'b&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["merino_cache::redis::Suggester"]}];
implementors["merino_suggest"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()