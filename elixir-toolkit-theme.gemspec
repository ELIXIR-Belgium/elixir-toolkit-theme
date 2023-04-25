# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "elixir-toolkit-theme"
  spec.version       = "1.26.0"
  spec.authors       = ["bedroesb"]
  spec.email         = ["bedro@psb.vib-ugent.be\n"]

  spec.summary       = "Flexible Jekyll theme using bootstrap 5 as CSS framework."
  spec.homepage      = "https://elixir-belgium.github.io/elixir-toolkit-theme/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9"

  spec.add_development_dependency "bundler", ">= 2.2.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
