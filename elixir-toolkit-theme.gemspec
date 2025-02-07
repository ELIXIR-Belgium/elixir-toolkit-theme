# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "elixir-toolkit-theme"

  spec.version       = "4.1.0"
  spec.authors       = ["bedroesb"]
  spec.email         = ["bert.droesbeke@vib.be"]

  spec.summary       = "Flexible Jekyll theme using bootstrap 5 as CSS framework."
  spec.homepage      = "https://elixir-belgium.github.io/elixir-toolkit-theme/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_data/countries.yml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 4.1.0"
  spec.add_runtime_dependency "elixir-toolkit-theme-plugins", ">= 0.1.10"

  spec.add_development_dependency "bundler", ">= 2.2.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
