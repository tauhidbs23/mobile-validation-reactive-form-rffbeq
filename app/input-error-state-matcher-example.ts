import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './input-error-state-matcher-example.html',
  styleUrls: ['./input-error-state-matcher-example.css'],
})
export class InputErrorStateMatcherExample {
  userAddressValidations: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.pattern(
      '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
        )])]
    });

  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */