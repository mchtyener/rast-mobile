import {ChangeDetectionStrategy, Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {ModalText} from "../../core/enum/modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SocialMediaService} from "../../core/services/social-media.service";
import {ISocialMediaItem, SocialMediaItem} from "../../core/model/socialMediaItem";

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [FormsModule, NgIf, ReactiveFormsModule, NgClass],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
    @Input() data!: SocialMediaItem;
    fg!: FormGroup
    updateStatus: WritableSignal<boolean> = signal(false);
    ModalText = ModalText;

    constructor(private fb: FormBuilder, public modalService: NgbModal, private socialMediaService: SocialMediaService) {
        this.fg = this.fb.group({
            link: new FormControl('', [Validators.required, Validators.minLength(5)]),
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            description: new FormControl('', [Validators.required, Validators.minLength(5)]),
        })

    }

    ngOnInit() {
        if (this.data?._id) {
            this.socialMediaService.getDetailSocialMedia(String(this.data._id)).subscribe((data: SocialMediaItem) => {
                const user: ISocialMediaItem = new ISocialMediaItem(data)
                this.fg.get('link')?.setValue(user.link)
                this.fg.get('name')?.setValue(user.name)
                this.fg.get('description')?.setValue(user.description)
                this.updateStatus.set(true)
            },(err)=>{
              console.log(err.error.message)
              this.updateStatus.set(false)

            })
        }
    }

    createSocialMedia() {
        if (this.fg.invalid) {
            alert('Formu doğru doldurunuz')
            return
        }
        this.socialMediaService.socialMediaCreate(this.fg.value).subscribe({
            next: (data: SocialMediaItem) => {
                console.log(data)
            },
            error: () => {

            }, complete: () => {
                this.modalService.dismissAll()
                this.socialMediaService.listAll.next(true)
            }
        })
    }

    socialMediaUpdate() {
        if (this.fg.invalid) {
            alert('Formu doğru doldurunuz')
            return
        }

        this.socialMediaService.socialMediaUpdate({
            ...this.fg.value,
            _id: this.data._id
        }).subscribe({
            next: (data) => {
            },
            error: () => {

            }, complete: () => {
                this.modalService.dismissAll()
                this.socialMediaService.listAll.next(true)
            }
        })
    }

    closeModal() {
        this.modalService.dismissAll()
    }

}
