import { Module, forwardRef } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [forwardRef(() => OrdersModule)],
  providers: [PaymentService, PaymentResolver],
  exports: [PaymentService],
})
export class PaymentModule {}